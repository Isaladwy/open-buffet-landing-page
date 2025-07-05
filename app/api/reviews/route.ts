import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const reviewsFile = path.join(process.cwd(), 'data', 'reviews.json');

// Helper function to ensure the data directory and file exist
async function ensureFileExists() {
  try {
    await fs.access(reviewsFile);
  } catch {
    // File doesn't exist, create it with initial data
    const initialReviews = [
      {
        name: 'سارة الأحمد',
        review:
          'تجربة رائعة! تنوع الأطباق وجودة الخدمة جعلت الحفل مميزاً جداً.',
        stars: 5,
        date: new Date().toISOString(),
      },
      {
        name: 'محمد العتيبي',
        review: 'بوفيه غني بالأصناف الطازجة. أنصح به للحفلات والأعراس.',
        stars: 5,
        date: new Date().toISOString(),
      },
      {
        name: 'ريم السبيعي',
        review:
          'الطعام لذيذ والأجواء راقية. شكراً لفريق العمل على التنظيم الرائع.',
        stars: 4,
        date: new Date().toISOString(),
      },
    ];

    await fs.writeFile(reviewsFile, JSON.stringify(initialReviews, null, 2));
  }
}

// GET - Retrieve all reviews
export async function GET() {
  try {
    await ensureFileExists();
    const data = await fs.readFile(reviewsFile, 'utf8');
    const reviews = JSON.parse(data);
    return NextResponse.json(reviews);
  } catch (error) {
    console.error('Error reading reviews:', error);
    return NextResponse.json(
      { error: 'Failed to load reviews' },
      { status: 500 }
    );
  }
}

// POST - Add a new review
export async function POST(request: Request) {
  try {
    await ensureFileExists();

    const newReview = await request.json();

    // Validate the review data
    if (!newReview.name || !newReview.review || !newReview.stars) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Add timestamp to the review
    const reviewWithDate = {
      ...newReview,
      date: new Date().toISOString(),
    };

    // Read existing reviews
    const data = await fs.readFile(reviewsFile, 'utf8');
    const reviews = JSON.parse(data);

    // Add new review to the beginning
    reviews.unshift(reviewWithDate);

    // Write back to file
    await fs.writeFile(reviewsFile, JSON.stringify(reviews, null, 2));

    return NextResponse.json({
      success: true,
      message: 'Review added successfully',
      review: reviewWithDate,
    });
  } catch (error) {
    console.error('Error saving review:', error);
    return NextResponse.json(
      { error: 'Failed to save review' },
      { status: 500 }
    );
  }
}
