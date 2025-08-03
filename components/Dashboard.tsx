'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Users,
  Phone,
  MessageSquare,
  Calendar,
  Trash2,
  Search,
  Download,
  Eye,
} from 'lucide-react';

interface FormSubmission {
  id: string;
  name: string;
  phone: string;
  message: string;
  timestamp: string;
  status: 'new' | 'contacted' | 'completed';
}

const Dashboard = () => {
  const [submissions, setSubmissions] = useState<FormSubmission[]>([]);
  const [filteredSubmissions, setFilteredSubmissions] = useState<
    FormSubmission[]
  >([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<
    'all' | 'new' | 'contacted' | 'completed'
  >('all');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [sessionTimeout, setSessionTimeout] = useState<NodeJS.Timeout | null>(
    null
  );
  const [lastActivity, setLastActivity] = useState<number>(Date.now());

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const response = await fetch('/api/submissions');
        if (response.ok) {
          const data = await response.json();
          setSubmissions(data);
        } else {
          console.error('Failed to fetch submissions');
        }
      } catch (error) {
        console.error('Error fetching submissions:', error);
      }
    };

    fetchSubmissions();
  }, []);

  useEffect(() => {
    let filtered = submissions;

    if (searchTerm) {
      filtered = filtered.filter(
        (submission) =>
          submission.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          submission.phone.includes(searchTerm) ||
          submission.message.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (statusFilter !== 'all') {
      filtered = filtered.filter(
        (submission) => submission.status === statusFilter
      );
    }

    setFilteredSubmissions(filtered);
  }, [submissions, searchTerm, statusFilter]);

  const handleStatusChange = async (
    id: string,
    newStatus: FormSubmission['status']
  ) => {
    try {
      const response = await fetch(`/api/submissions/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (response.ok) {
        const updatedSubmission = await response.json();
        setSubmissions((prev) =>
          prev.map((submission) =>
            submission.id === id ? updatedSubmission : submission
          )
        );
      } else {
        console.error('Failed to update submission status');
      }
    } catch (error) {
      console.error('Error updating submission status:', error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`/api/submissions/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setSubmissions((prev) =>
          prev.filter((submission) => submission.id !== id)
        );
      } else {
        console.error('Failed to delete submission');
      }
    } catch (error) {
      console.error('Error deleting submission:', error);
    }
  };

  const handleLogin = () => {
    if (password === 'megaart741@@') {
      setIsAuthenticated(true);
      setPassword('');
      localStorage.setItem('dashboardAuthenticated', 'true');
      localStorage.setItem('dashboardLoginTime', Date.now().toString());
      startSessionTimer();
    } else {
      alert('كلمة المرور غير صحيحة');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('dashboardAuthenticated');
    localStorage.removeItem('dashboardLoginTime');
    if (sessionTimeout) {
      clearTimeout(sessionTimeout);
      setSessionTimeout(null);
    }
  };

  const startSessionTimer = () => {
    // Clear existing timeout
    if (sessionTimeout) {
      clearTimeout(sessionTimeout);
    }

    // Set new timeout for 10 minutes (600 seconds)
    const timeout = setTimeout(() => {
      alert('انتهت صلاحية الجلسة. سيتم تسجيل الخروج تلقائياً.');
      handleLogout();
    }, 10 * 60 * 1000); // 10 minutes

    setSessionTimeout(timeout);
  };

  const updateActivity = () => {
    setLastActivity(Date.now());
    if (isAuthenticated) {
      startSessionTimer();
    }
  };

  // Check if already authenticated on component mount
  useEffect(() => {
    const isAuth = localStorage.getItem('dashboardAuthenticated');
    const loginTime = localStorage.getItem('dashboardLoginTime');

    if (isAuth === 'true' && loginTime) {
      const loginTimestamp = parseInt(loginTime);
      const currentTime = Date.now();
      const sessionDuration = 30 * 60 * 1000; // 30 minutes

      // Check if session has expired
      if (currentTime - loginTimestamp > sessionDuration) {
        // Session expired, clear authentication
        localStorage.removeItem('dashboardAuthenticated');
        localStorage.removeItem('dashboardLoginTime');
        alert('انتهت صلاحية الجلسة. يرجى تسجيل الدخول مرة أخرى.');
      } else {
        // Session still valid, restore authentication
        setIsAuthenticated(true);
        startSessionTimer();
      }
    }
  }, []);

  // Add activity listeners to reset session timer
  useEffect(() => {
    if (isAuthenticated) {
      const activityEvents = [
        'mousedown',
        'mousemove',
        'keypress',
        'scroll',
        'touchstart',
        'click',
      ];

      const handleActivity = () => {
        updateActivity();
      };

      activityEvents.forEach((event) => {
        document.addEventListener(event, handleActivity);
      });

      // Handle tab/browser close
      const handleBeforeUnload = () => {
        // Clear session when tab is closed
        localStorage.removeItem('dashboardAuthenticated');
        localStorage.removeItem('dashboardLoginTime');
      };

      const handleVisibilityChange = () => {
        if (document.visibilityState === 'hidden') {
          // Tab is hidden (minimized or switched), clear session
          localStorage.removeItem('dashboardAuthenticated');
          localStorage.removeItem('dashboardLoginTime');
        }
      };

      window.addEventListener('beforeunload', handleBeforeUnload);
      document.addEventListener('visibilitychange', handleVisibilityChange);

      return () => {
        activityEvents.forEach((event) => {
          document.removeEventListener(event, handleActivity);
        });
        window.removeEventListener('beforeunload', handleBeforeUnload);
        document.removeEventListener(
          'visibilitychange',
          handleVisibilityChange
        );
      };
    }
  }, [isAuthenticated]);

  const exportData = () => {
    const csvContent = [
      ['الاسم', 'رقم الهاتف', 'الرسالة', 'التاريخ', 'الحالة'],
      ...filteredSubmissions.map((submission) => [
        submission.name,
        submission.phone,
        submission.message,
        submission.timestamp,
        submission.status,
      ]),
    ]
      .map((row) => row.join(','))
      .join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute(
      'download',
      `form_submissions_${new Date().toISOString().split('T')[0]}.csv`
    );
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getStatusColor = (status: FormSubmission['status']) => {
    switch (status) {
      case 'new':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'contacted':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'completed':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-megaart-black via-gray-900 to-megaart-black flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 max-w-md w-full"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white  mb-2">لوحة التحكم</h2>
            <p className="text-neutral-300 font-roboto">
              أدخل كلمة المرور للوصول إلى البيانات
            </p>
          </div>

          <div className="space-y-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-neutral-400 focus:outline-none focus:border-megaart-gold transition-colors font-roboto"
              placeholder="كلمة المرور"
              onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
            />

            <button
              onClick={handleLogin}
              className="w-full py-3 bg-gradient-to-r from-megaart-gold to-brand-400 text-megaart-black font-semibold rounded-xl hover:shadow-xl transition-all duration-300 font-roboto"
            >
              دخول
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-megaart-black via-gray-900 to-megaart-black">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-right md:text-center mb-8 relative"
        >
          <h1 className="text-4xl md:text-5xl font-bold  text-transparent bg-clip-text bg-gradient-to-r from-megaart-gold to-brand-400 mb-4">
            لوحة التحكم
          </h1>
          <p className="text-neutral-300 font-roboto text-lg">
            إدارة طلبات التواصل والعملاء
          </p>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="absolute top-0 left-0 bg-red-500/20 hover:bg-red-500/30 text-red-400 px-4 py-2 rounded-xl border border-red-500/30 transition-all duration-300 font-roboto"
          >
            تسجيل الخروج
          </button>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8"
        >
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-neutral-400 font-roboto">إجمالي الطلبات</p>
                <p className="text-3xl font-bold text-white ">
                  {submissions.length}
                </p>
              </div>
              <Users className="text-megaart-gold" size={32} />
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-neutral-400 font-roboto">طلبات جديدة</p>
                <p className="text-3xl font-bold text-blue-400">
                  {submissions.filter((s) => s.status === 'new').length}
                </p>
              </div>
              <MessageSquare className="text-blue-400" size={32} />
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-neutral-400 font-roboto">تم التواصل</p>
                <p className="text-3xl font-bold text-yellow-400 ">
                  {submissions.filter((s) => s.status === 'contacted').length}
                </p>
              </div>
              <Phone className="text-yellow-400" size={32} />
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-neutral-400 font-roboto">مكتملة</p>
                <p className="text-3xl font-bold text-green-400 ">
                  {submissions.filter((s) => s.status === 'completed').length}
                </p>
              </div>
              <Calendar className="text-green-400" size={32} />
            </div>
          </div>
        </motion.div>

        {/* Filters and Search */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 mb-8"
        >
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col md:flex-row gap-4 flex-1">
              <div className="relative flex-1">
                <Search
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="البحث في الطلبات..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-neutral-400 focus:outline-none focus:border-megaart-gold transition-colors font-roboto pr-12"
                />
              </div>

              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value as any)}
                className="bg-black/50 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-megaart-gold transition-colors font-roboto"
              >
                <option value="all">جميع الحالات</option>
                <option value="new">جديد</option>
                <option value="contacted">تم التواصل</option>
                <option value="completed">مكتمل</option>
              </select>
            </div>

            <button
              onClick={exportData}
              className="bg-gradient-to-r from-megaart-gold to-brand-400 text-megaart-black font-semibold px-6 py-3 rounded-xl hover:shadow-xl transition-all duration-300 font-roboto flex items-center gap-2"
            >
              <Download size={20} />
              تصدير البيانات
            </button>
          </div>
        </motion.div>

        {/* Recent Submissions Quick View */}
        {/* {submissions.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 mb-6"
          >
            <h3 className="text-xl font-bold text-white  mb-4">
              آخر الطلبات
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {submissions.slice(0, 6).map((submission) => (
                <Link
                  key={submission.id}
                  href={`/dashboard/request/${submission.id}`}
                  className="bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-white font-semibold font-roboto truncate">
                      {submission.name}
                    </h4>
                    <span
                      className={`px-2 py-1 rounded-lg text-xs font-roboto ${getStatusColor(
                        submission.status
                      )}`}
                    >
                      {submission.status === 'new'
                        ? 'جديد'
                        : submission.status === 'contacted'
                        ? 'تم التواصل'
                        : 'مكتمل'}
                    </span>
                  </div>
                  <p className="text-neutral-300 text-sm font-roboto mb-2">
                    {submission.phone}
                  </p>
                  <p className="text-neutral-400 text-sm font-roboto truncate">
                    {submission.message || 'لا توجد رسالة'}
                  </p>
                  <p className="text-neutral-500 text-xs font-roboto mt-2">
                    {new Date(submission.timestamp).toLocaleDateString('ar-SA')}
                  </p>
                </Link>
              ))}
            </div>
          </motion.div>
        )} */}

        {/* Submissions Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-white/10">
                <tr>
                  <th className="px-6 py-4 text-right text-neutral-300 font-roboto">
                    الرقم
                  </th>
                  <th className="px-6 py-4 text-right text-neutral-300 font-roboto">
                    الاسم
                  </th>
                  <th className="px-6 py-4 text-right text-neutral-300 font-roboto">
                    رقم الهاتف
                  </th>
                  <th className="px-6 py-4 text-right text-neutral-300 font-roboto">
                    الرسالة
                  </th>
                  <th className="px-6 py-4 text-right text-neutral-300 font-roboto">
                    التاريخ
                  </th>
                  <th className="px-6 py-4 text-right text-neutral-300 font-roboto">
                    الحالة
                  </th>
                  <th className="px-6 py-4 text-right text-neutral-300 font-roboto">
                    التفاصيل
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredSubmissions.length === 0 ? (
                  <tr>
                    <td
                      colSpan={7}
                      className="px-6 py-8 text-center text-neutral-400 font-roboto"
                    >
                      لا توجد طلبات لعرضها
                    </td>
                  </tr>
                ) : (
                  filteredSubmissions.map((submission, index) => (
                    <tr
                      key={submission.id}
                      className="border-t border-white/10 hover:bg-white/5 transition-colors"
                    >
                      <td className="px-6 py-4 text-neutral-300 font-roboto">
                        {index + 1}
                      </td>
                      <td className="px-6 py-4 text-white font-roboto">
                        {submission.name}
                      </td>
                      <td className="px-6 py-4 text-white font-roboto">
                        {submission.phone}
                      </td>
                      <td className="px-6 py-4 text-white font-roboto max-w-xs">
                        <div className="flex items-center gap-2">
                          <span className="truncate">
                            {submission.message || 'لا توجد رسالة'}
                          </span>
                          {submission.message &&
                            submission.message.length > 50 && (
                              <Link
                                href={`/dashboard/request/${submission.id}`}
                                className="text-megaart-gold hover:text-brand-400 transition-colors text-sm"
                                title="عرض الرسالة كاملة"
                              >
                                عرض المزيد
                              </Link>
                            )}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-neutral-300 font-roboto">
                        {new Date(submission.timestamp).toLocaleDateString(
                          'ar-SA'
                        )}
                      </td>
                      <td className="px-6 py-4">
                        <select
                          value={submission.status}
                          onChange={(e) =>
                            handleStatusChange(
                              submission.id,
                              e.target.value as FormSubmission['status']
                            )
                          }
                          className={`px-3 py-1 rounded-lg bg-black/50 border text-sm font-roboto ${getStatusColor(
                            submission.status
                          )}`}
                        >
                          <option value="new">جديد</option>
                          <option value="contacted">تم التواصل</option>
                          <option value="completed">مكتمل</option>
                        </select>
                      </td>
                      <td className="px-6 py-4">
                        <Link
                          href={`/dashboard/request/${submission.id}`}
                          className="text-megaart-gold hover:text-brand-400 transition-colors"
                          title="عرض التفاصيل"
                        >
                          <Eye size={20} />
                        </Link>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
