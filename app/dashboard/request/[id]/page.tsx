'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Calendar,
  Phone,
  User,
  MessageSquare,
  Trash2,
  Edit,
} from 'lucide-react';
import Link from 'next/link';

interface FormSubmission {
  id: string;
  name: string;
  phone: string;
  message: string;
  timestamp: string;
  status: 'new' | 'contacted' | 'completed';
}

export default function RequestDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const [submission, setSubmission] = useState<FormSubmission | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedMessage, setEditedMessage] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [resolvedParams, setResolvedParams] = useState<{ id: string } | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Resolve params
    params.then((resolved) => {
      console.log('Resolved params:', resolved);
      setResolvedParams(resolved);
    }).catch((error) => {
      console.error('Error resolving params:', error);
    });
  }, [params]);

  useEffect(() => {
    if (!resolvedParams) return;

    // Check authentication with session timeout
    const isAuth = localStorage.getItem('dashboardAuthenticated');
    const loginTime = localStorage.getItem('dashboardLoginTime');

    if (isAuth === 'true' && loginTime) {
      const loginTimestamp = parseInt(loginTime);
      const currentTime = Date.now();
      const sessionDuration = 30 * 60 * 1000; // 30 minutes

      // Check if session has expired
      if (currentTime - loginTimestamp > sessionDuration) {
        // Session expired, clear authentication and redirect
        localStorage.removeItem('dashboardAuthenticated');
        localStorage.removeItem('dashboardLoginTime');
        alert('انتهت صلاحية الجلسة. سيتم توجيهك إلى صفحة تسجيل الدخول.');
        window.location.href = '/dashboard';
        return;
      } else {
        // Session still valid
        setIsAuthenticated(true);
      }
    } else {
      window.location.href = '/dashboard';
      return;
    }

    // Get submission data from API
    const fetchSubmission = async () => {
      try {
        setIsLoading(true);
        console.log('Fetching submission with ID:', resolvedParams.id);
        const response = await fetch(`/api/submissions/${resolvedParams.id}`);
        console.log('Response status:', response.status);
        
        if (response.ok) {
          const foundSubmission = await response.json();
          console.log('Submission found:', foundSubmission);
          setSubmission(foundSubmission);
          setEditedMessage(foundSubmission.message);
        } else {
          const errorData = await response.json();
          console.error('Failed to fetch submission:', errorData);
        }
      } catch (error) {
        console.error('Error fetching submission:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSubmission();
  }, [resolvedParams]);

  // Handle tab/browser close for session management
  useEffect(() => {
    if (isAuthenticated) {
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
        window.removeEventListener('beforeunload', handleBeforeUnload);
        document.removeEventListener(
          'visibilitychange',
          handleVisibilityChange
        );
      };
    }
  }, [isAuthenticated]);

  const handleStatusChange = async (newStatus: FormSubmission['status']) => {
    if (!submission) return;

    try {
      const response = await fetch(`/api/submissions/${submission.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (response.ok) {
        const updatedSubmission = await response.json();
        setSubmission(updatedSubmission);
      } else {
        console.error('Failed to update submission status');
      }
    } catch (error) {
      console.error('Error updating submission status:', error);
    }
  };

  const handleSaveMessage = async () => {
    if (!submission) return;

    try {
      const response = await fetch(`/api/submissions/${submission.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: editedMessage }),
      });

      if (response.ok) {
        const updatedSubmission = await response.json();
        setSubmission(updatedSubmission);
        setIsEditing(false);
      } else {
        console.error('Failed to update submission message');
      }
    } catch (error) {
      console.error('Error updating submission message:', error);
    }
  };

  const handleDelete = async () => {
    if (!submission || !confirm('هل أنت متأكد من حذف هذا الطلب؟')) return;

    try {
      const response = await fetch(`/api/submissions/${submission.id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        window.location.href = '/dashboard';
      } else {
        console.error('Failed to delete submission');
      }
    } catch (error) {
      console.error('Error deleting submission:', error);
    }
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
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white font-myriad mb-4">
            جاري التحقق من الصلاحيات...
          </h2>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white font-myriad mb-4">
            جاري تحميل البيانات...
          </h2>
        </div>
      </div>
    );
  }

  if (!submission) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white font-myriad mb-4">
            الطلب غير موجود
          </h2>
          <Link
            href="/dashboard"
            className="bg-gradient-to-r from-megaart-gold to-brand-400 text-megaart-black font-semibold px-6 py-3 rounded-xl hover:shadow-xl transition-all duration-300 font-roboto"
          >
            العودة للوحة التحكم
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen bg-gray-900 text-white"
      dir="rtl"
    >
      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-8"
        >
          <Link
            href="/dashboard"
            className="flex items-center gap-2 text-neutral-300 hover:text-white transition-colors font-roboto"
          >
            <ArrowRight className="rotate-180" size={20} />
            العودة للوحة التحكم
          </Link>

          <div className="flex items-center gap-4">
            <select
              value={submission.status}
              onChange={(e) =>
                handleStatusChange(e.target.value as FormSubmission['status'])
              }
              className={`px-4 py-2 rounded-xl border text-sm font-roboto ${getStatusColor(
                submission.status
              )}`}
            >
              <option value="new">جديد</option>
              <option value="contacted">تم التواصل</option>
              <option value="completed">مكتمل</option>
            </select>

            <button
              onClick={handleDelete}
              className="text-red-400 hover:text-red-300 transition-colors p-2"
              title="حذف الطلب"
            >
              <Trash2 size={20} />
            </button>
          </div>
        </motion.div>

        {/* Request Details */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 overflow-hidden"
        >
          {/* Header Info */}
          <div className="bg-white/10 p-6 border-b border-white/10" dir="rtl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start gap-3 text-right">
                <User className="text-megaart-gold flex-shrink-0" size={24} />
                <div className="flex-1 text-right min-w-0">
                  <p className="text-neutral-400 text-sm font-roboto text-right">
                    الاسم
                  </p>
                  <p className="text-white font-semibold font-roboto text-right break-words">
                    {submission.name}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 text-right">
                <Phone className="text-megaart-gold flex-shrink-0" size={24} />
                <div className="flex-1 text-right min-w-0">
                  <p className="text-neutral-400 text-sm font-roboto text-right">
                    رقم الهاتف
                  </p>
                  <p className="text-white font-semibold font-roboto text-right break-words">
                    {submission.phone}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 text-right">
                <Calendar
                  className="text-megaart-gold flex-shrink-0"
                  size={24}
                />
                <div className="flex-1 text-right min-w-0">
                  <p className="text-neutral-400 text-sm font-roboto text-right">
                    تاريخ الطلب
                  </p>
                  <p className="text-white font-semibold font-roboto text-right break-words">
                    {new Date(submission.timestamp).toLocaleDateString(
                      'ar-SA',
                      {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                      }
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Message Section */}
          <div className="p-6">
            <div className="flex items-center justify-between mb-4 text-right">
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="text-megaart-gold hover:text-brand-400 transition-colors p-2"
                title="تعديل الرسالة"
              >
                <Edit size={20} />
              </button>

              <div className="flex items-center gap-2 text-right">
                <h3 className="text-xl font-bold text-white font-myriad text-right">
                  الرسالة
                </h3>
                <MessageSquare className="text-megaart-gold" size={24} />
              </div>
            </div>

            {isEditing ? (
              <div className="space-y-4">
                <textarea
                  value={editedMessage}
                  onChange={(e) => setEditedMessage(e.target.value)}
                  rows={8}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-neutral-400 focus:outline-none focus:border-megaart-gold transition-colors font-roboto text-right"
                  placeholder="أدخل الرسالة..."
                  dir="rtl"
                />
                <div className="flex gap-3">
                  <button
                    onClick={handleSaveMessage}
                    className="bg-gradient-to-r from-megaart-gold to-brand-400 text-megaart-black font-semibold px-6 py-2 rounded-xl hover:shadow-xl transition-all duration-300 font-roboto"
                  >
                    حفظ التغييرات
                  </button>
                  <button
                    onClick={() => {
                      setIsEditing(false);
                      setEditedMessage(submission.message);
                    }}
                    className="bg-white/10 border border-white/20 text-white px-6 py-2 rounded-xl hover:bg-white/20 transition-all duration-300 font-roboto"
                  >
                    إلغاء
                  </button>
                </div>
              </div>
            ) : (
              <div
                className="bg-white/5 rounded-xl p-6 border border-white/10 text-right"
                dir="rtl"
              >
                <p className="text-white font-roboto text-lg leading-relaxed whitespace-pre-wrap text-right break-words">
                  {submission.message || 'لا توجد رسالة'}
                </p>
              </div>
            )}
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/dashboard"
            className="bg-white/10 border border-white/20 text-white px-8 py-3 rounded-xl hover:bg-white/20 transition-all duration-300 font-roboto text-center"
          >
            العودة للوحة التحكم
          </Link>

          <a
            href={`tel:${submission.phone}`}
            className="bg-gradient-to-r from-megaart-gold to-brand-400 text-megaart-black font-semibold px-8 py-3 rounded-xl hover:shadow-xl transition-all duration-300 font-roboto text-center"
          >
            الاتصال بالعميل
          </a>
        </motion.div>
      </div>
    </div>
  );
}
