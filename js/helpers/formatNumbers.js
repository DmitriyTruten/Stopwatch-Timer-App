import { timer } from "../timer.js";

// Formats timer display
export function formatHours() {
  const { hours } = timer;
  if (hours < 10) {
    return "0" + timer.hours;
  }
  return timer.hours;
}

export function formatMinutes() {
  const { minutes } = timer;
  if (minutes < 10) {
    return "0" + timer.minutes;
  }
  return timer.minutes;
}

export function formatSeconds() {
  const { seconds } = timer;
  if (seconds < 10) {
    return "0" + timer.seconds;
  }
  return timer.seconds;
}