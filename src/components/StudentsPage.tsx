import { useEffect, useState } from "react";
import { getStudents } from "../api";

export default function StudentsPage() {
  const [students, setStudents] = useState<any[]>([]);

  useEffect(() => {
    getStudents().then(setStudents);
  }, []);

  return (
    <div>
      <h1>Students</h1>
      {students.map((s, index) => (
        <div key={index}>
          {Object.entries(s).map(([key, value]) => (
            <p key={key}>
              {key}: {String(value)}
            </p>
          ))}
          <hr />
        </div>
      ))}
    </div>
  );
}


