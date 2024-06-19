import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// shadcn auto create function
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * convert file to Url
 * @param file
 * @returns
 */
export const convertFileToUrl = (file: File) => URL.createObjectURL(file);

/**
 * get locale time string
 * @param value
 * @returns
 */
export function formatDateString(value: string): string {
  const date = new Date(value);
  const formatDate = date.toLocaleDateString("zh-TW", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  const formatTime = date.toLocaleDateString([], {
    hour: "numeric",
    minute: "2-digit",
  });

  return `${formatDate} at ${formatTime}`;
}

/**
 * Summarize time range
 * @param timestamp
 * @returns
 */
export function multiFormatDateString(timestamp: string = ""): string {
  const timestampMath = Math.round(new Date(timestamp).getTime() / 1000);
  const date: Date = new Date(timestampMath * 1000);
  const now: Date = new Date();

  const diff: number = now.getTime() - date.getTime();
  const diffInSeconds: number = diff / 1000;
  const diffInMinutes: number = diffInSeconds / 60;
  const diffInHours: number = diffInMinutes / 60;
  const diffInDays: number = diffInHours / 24;

  if (Math.floor(diffInDays) >= 30) return timestamp;

  if (Math.floor(diffInDays) > 1 && diffInDays < 30)
    return `${Math.floor(diffInDays)} days ago`;

  if (Math.floor(diffInDays) === 1) return `${Math.floor(diffInDays)} day ago`;

  if (Math.floor(diffInHours) >= 1)
    return `${Math.floor(diffInHours)} hours ago`;

  if (Math.floor(diffInMinutes) >= 1)
    return `${Math.floor(diffInMinutes)} minutes ago`;

  return "Just now";
}

/**
 * check post is liked by user
 * @param likeList
 * @param userId
 * @returns
 */
export const checkIsLiked = (likeList: string[], userId: string) => {
  return likeList.includes(userId);
};
