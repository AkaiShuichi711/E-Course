import { Skeleton } from "@/components/ui/skeleton";
import React from "react";
import Course from "./Course";
import { useGetPublishedCourseQuery } from "@/features/api/courseApi";
import "./Courses.css";

const Courses = () => {
  const { data, isLoading, isError } = useGetPublishedCourseQuery();

  if (isError) return <h1>Some error occurred while fetching courses.</h1>;

  return (
    <div className="bg-gray-50 dark:bg-[#141414]">
      <div className="overflow-hidden bg-[#6D28D2] dark:bg-[#6D28D2] text-white dark:text-white-200 py-2">
        <div className="animate-marquee font-medium text-sm- px-4">
          🔥 New Courses Available! &nbsp; 🚀 Learn Anytime, Anywhere! &nbsp; 🎯 Updated Weekly! &nbsp;
        </div>
      </div>
      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {isLoading
            ? Array.from({ length: 8 }).map((_, i) => (
                <CourseSkeleton key={i} />
              ))
            : data?.courses?.map((course, i) => (
                <Course key={i} course={course} />
              ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;

const CourseSkeleton = () => (
  <div className="bg-white shadow-md hover:shadow-lg transition-shadow rounded-lg overflow-hidden">
    <Skeleton className="w-full h-36" />
    <div className="px-5 py-4 space-y-3">
      <Skeleton className="h-6 w-3/4" />
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Skeleton className="h-6 w-6 rounded-full" />
          <Skeleton className="h-4 w-20" />
        </div>
        <Skeleton className="h-4 w-16" />
      </div>
      <Skeleton className="h-4 w-1/4" />
    </div>
  </div>
);
