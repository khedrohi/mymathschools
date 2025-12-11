const API_URL = import.meta.env.VITE_API_URL as string;
export async function getStudents() {
  const res = await fetch(`${API_URL}/students.php`);
  if (!res.ok) throw new Error("API request failed");
  return res.json();
}
