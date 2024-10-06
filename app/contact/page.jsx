"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { contactEmail } from "@/lib/emailTemplateHelper";

const contactInfo = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+918320907443"
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "iamhitesh3@gmail.com"
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Jamnagar Road, Rajkot 360006"
  }
];

export default function Contact() {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [submissionStatus, setSubmissionStatus] = useState(null); // State to hold submission status message
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmittedSuccessfuly, setIsSubmittedSuccessfuly] = useState(false);

  const validateForm = () => {
    
    const newErrors = {};
    if (!formValues.firstName) newErrors.firstName = "First name is required";
    if (!formValues.lastName) newErrors.lastName = "Last name is required";
    if (!formValues.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formValues.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?\d{10,15}$/.test(formValues.phone)) {
      newErrors.phone = "Phone number is invalid";
    }
    if (!formValues.service) newErrors.service = "Service selection is required";
    if (!formValues.message) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // return true if no errors
  };

  const sendEmail = async () => {
    if (!validateForm()) return;
    setIsSubmitting(true);
    setSubmissionStatus(null); // Reset submission status

    try {
      const emailData = {
        to: process.env.NEXT_PUBLIC_CONTACT_ADMIN,
        subject: `Contact form submmited by ${formValues.firstName} ${formValues.lastName}`,
        html: contactEmail(formValues)
      }

      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      if (result.success) {
        setSubmissionStatus("Email sent successfully!");
        setIsSubmittedSuccessfuly(true)
        // Reset form values if needed
        setFormValues({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          service: "",
          message: ""
        });
      } else {
        setIsSubmittedSuccessfuly(false)
        setSubmissionStatus("Failed to send email. Please try again.");
      }
    } catch (error) {
      setIsSubmittedSuccessfuly(false)
      setSubmissionStatus("An error occurred: " + error.message);
    } finally {
      setIsSubmitting(false);

      setTimeout(() => {
        setSubmissionStatus("");
      }, 3000)

    }

  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    setErrors({ ...errors, [name]: undefined }); // Clear error on change
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn"
        }
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px] items-center">
          {/* Conatct form */}
          <div className="form-wrap xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl" onSubmit={(e) => {
              e.preventDefault();
              sendEmail();
            }}>
              <h3 className="text-4xl text-accent">Let&apos;s work together</h3>
              <p className="text-white/60 text-[15px]">Join us in collaboration! Let&apos;s combine our skills and creativity to achieve amazing results together. Your ideas matter—let&apos;s make them happen!</p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Input
                    type="text"
                    name="firstName"
                    placeholder="Enter First Name"
                    value={formValues.firstName}
                    onChange={handleChange}
                  />
                  {errors.firstName && <span className="text-red-500">{errors.firstName}</span>}
                </div>
                <div>
                  <Input
                    type="text"
                    name="lastName"
                    placeholder="Enter Last Name"
                    value={formValues.lastName}
                    onChange={handleChange}
                  />
                  {errors.lastName && <span className="text-red-500">{errors.lastName}</span>}
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Enter Email Address"
                    value={formValues.email}
                    onChange={handleChange}
                  />
                  {errors.email && <span className="text-red-500">{errors.email}</span>}
                </div>
                <div>
                  <Input
                    type="text"
                    name="phone"
                    placeholder="Enter Phone number"
                    value={formValues.phone}
                    onChange={handleChange}
                  />
                  {errors.phone && <span className="text-red-500">{errors.phone}</span>}
                </div>
              </div>
              {/* Select */}
              <div>
                <Select name="service" value={formValues.service} onValueChange={(value) => {
                  setFormValues({ ...formValues, service: value });
                  setErrors({ ...errors, service: undefined }); // Clear error on change
                }}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select a service</SelectLabel>
                      <SelectItem value="Web Development">Web Development</SelectItem>
                      <SelectItem value="UI/UX">UI/UX</SelectItem>
                      <SelectItem value="Logo Design">Logo Design</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {errors.service && <span className="text-red-500">{errors.service}</span>}
              </div>
              {/* text-area */}
              <div>
                <Textarea name="message" className="h-[200px]" placeholder="Type your message here..." value={formValues.message} onChange={handleChange} />
                {errors.message && <span className="text-red-500">{errors.message}</span>}
              </div>
              {/* btn */}
              <Button size="md" className="max-w-40 disabled:opacity-50">{isSubmitting ? "Sending..." : "Send message"}</Button>
              {/* Submission Status */}
              {submissionStatus && (<p className={`${isSubmittedSuccessfuly == true ? "text-green-500": "text-red-500"}`}>{submissionStatus}</p>)}
            </form>
          </div>
          {/* Info */}
          <div className="info-wrap flex-1 flex item-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {contactInfo.map((item, index) => {
                return (
                  <li className="flex items-center gap-6" key={index}>
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]   ">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
