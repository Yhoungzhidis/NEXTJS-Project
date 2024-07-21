"use client";
import { useState } from 'react';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { Card, CardHeader, CardContent } from '@/components/ui/card';

interface Lesson {
  title: string;
  content: string;
}

interface Instructor {
  name: string;
  bio: string;
}

interface Course {
  id: string;
  title: string;
  description: string;
  instructor: Instructor;
  lessons: Lesson[];
}

interface CourseDetailsProps {
  course: Course;
}

const CourseDetails: React.FC<CourseDetailsProps> = ({ course }) => {
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);

  return (
    <div className="container mx-auto px-4 py-8">
      <Head>
        <title>Course one | Our Learning Platform</title>
        <meta name="description" />
      </Head>

      <h1 className="text-3xl font-bold mb-4">Course one</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <Card className="mb-6">
            <CardHeader>Course Description</CardHeader>
            <CardContent>world</CardContent>
          </Card>

          <Card>
            <CardHeader>Lessons</CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {/* {course.lessons.map((lesson, index) => (
                  <li 
                    key={index}
                    className="cursor-pointer hover:text-blue-500"
                    onClick={() => setSelectedLesson(lesson)}
                  >
                    {lesson.title}
                  </li>
                ))} */}
              </ul>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>Instructor</CardHeader>
            <CardContent>
              <h3 className="font-semibold">lcture</h3>
              <p>lecturer</p>
            </CardContent>
          </Card>

          {selectedLesson && (
            <Card className="mt-6">
              <CardHeader>h</CardHeader>
              <CardContent>k</CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

// export const getServerSideProps: GetServerSideProps<CourseDetailsProps> = async (context) => {
//   // In a real application, you would fetch this data from an API or database
//   const course: Course = {
//     id: context.params?.courseId as string,
//     title: "Introduction to Next.js",
//     description: "Learn the basics of Next.js and build modern React applications.",
//     instructor: {
//       name: "Jane Doe",
//       bio: "Experienced web developer and educator."
//     },
//     lessons: [
//       { title: "Getting Started with Next.js", content: "..." },
//       { title: "Routing in Next.js", content: "..." },
//       { title: "Server-Side Rendering", content: "..." },
//     ]
//   };

//   return {
//     props: { course }
//   };
// };

export default CourseDetails;