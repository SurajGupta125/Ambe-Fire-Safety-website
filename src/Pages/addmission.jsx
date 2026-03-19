import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const Addmission = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);


  const uploadFile = async (file) => {
    if (!file) return null;

    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "unsigned_preset");


    const uploadUrl = `https://api.cloudinary.com/v1_1/dfecre6pb/auto/upload`;

    try {
      const res = await fetch(uploadUrl, {
        method: "POST",
        body: data,
      });

      const result = await res.json();
      console.log("Cloudinary Response:", result);

      if (!res.ok) {
        throw new Error(result.error?.message || "Upload failed");
      }

      return result.secure_url;
    } catch (err) {
      console.error("Upload Error:", err.message);
      throw err;
    }
  };


  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = e.target;
      const photoFile = formData.photo.files[0];
      const docFile = formData.document.files[0];

      let photoUrl = "";
      let docUrl = "";

      if (photoFile) photoUrl = await uploadFile(photoFile);
      if (docFile) docUrl = await uploadFile(docFile);

      await emailjs.send(
        "service_yeyiri8",
        "template_317cgxd",
        {
          user_name: formData.user_name.value,
          user_phone: formData.user_phone.value,
          father_name: formData.father_name.value,
          user_email: formData.user_email.value,
          address: formData.address.value,
          qualification: formData.qualification.value,
          course: formData.course.value,
          photo_link: photoUrl,
          document_link: docUrl,
        },
        "F7BtSSvEnBcllsz06"
      );

      alert("Form Submitted Successfully");
      form.current.reset();
    } catch (error) {
      console.error("FINAL ERROR:", error.message);
      alert("Upload or Email failed.");
    }

    setLoading(false);
  };

  return (
    <section>
      <div className="admission-sec">
        <div className="addmission-adc">
          <span>ADMISSIONS OPEN 2024-25</span>
          <div style={{ fontSize: "3rem", fontWeight: "bolder" }}>
            STUDENT ADMISSION
          </div>
          <p>Fill the form below to apply for your desired course</p>
        </div>
      </div>

      <div className="admission-form-container">
        <form ref={form} onSubmit={sendEmail} className="admission-form">
          <h2>
            ADMISSION <span>FORM</span>
          </h2>

          <input type="text" name="user_name" placeholder="Full Name" required />
          <input type="text" name="user_phone" placeholder="Phone" required />
          <input type="text" name="father_name" placeholder="Father Name" required />
          <input type="email" name="user_email" placeholder="Email" required />
          <input type="text" name="address" placeholder="Address" required />

          <select name="qualification" required>
            <option>Select Qualification</option>
            <option>10th Pass</option>
            <option>12th Pass</option>
            <option>Graduate</option>
            <option>B.Sc</option>
            <option>B.Com</option>
            <option>BBA</option>
          </select>

          <select name="course" required>
            <option>Select Course</option>
            <option>DFS</option>
            <option>ADIS</option>
            <option>DIFSM</option>
            <option>DHSE</option>
            <option>NEBOSH</option>
            <option>IOSH</option>
            <option>B.Sc Fire & Safety</option>
          </select>

          <input type="file" name="photo" accept="image/*" />
          <input type="file" name="document" accept=".pdf,.doc,.docx,image/*" />

          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "SUBMIT"}
          </button>
        </form>
      </div>
    </section>
  );
};
