import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Select from "react-select"; 

const CreateJob = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Define skills as state
  const [skills, setSkills] = useState([
    { value: "JavaScript", label: "JavaScript" },
    { value: "React", label: "React" },
    { value: "Node.js", label: "Node.js" },
    { value: "MongoDB", label: "MongoDB" },
    { value: "CSS", label: "CSS" },
    { value: "HTML", label: "HTML" },
    { value: "Python", label: "Python" },
    { value: "AWS", label: "AWS" },
  ]);

  const handleSkillChange = (selectedOptions) => {
    console.log("Selected skills:", selectedOptions);
    // If you need to store selected skills into form state, set it here
  };

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    fetch("http://localhost:3000/post-job",{
      method:"post",
      headers:{"content-type":"application/json"},
      body:JSON.stringify(data)
    })
    .then(res=> res.json())
    .then((result)=>{
      console.log(result);
      if(result.acknowledged===true){
        alert("Job posted Sucessfully !!");
      }
      reset();
    })
  };

  return (
    <div className="pt-20 text-black">
      <div className="max-w-4xl mx-auto bg-white p-8 shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold mb-6">Post A Job</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-6">
          {/* Job Title */}
          <div className="col-span-2 sm:col-span-1">
            <label className="block text-gray-700">Job Title</label>
            <input
              type="text"
              className="w-full mt-1 p-2 border border-gray-300 rounded"
              {...register("jobTitle", { required: true })}
              placeholder="Web Developer"
            />
            {errors.jobTitle && <p className="text-red-500">Job title is required</p>}
          </div>

          {/* Company Name */}
          <div className="col-span-2 sm:col-span-1">
            <label className="block text-gray-700">Company Name</label>
            <select
              className="w-full mt-1 p-2 border border-gray-300 rounded"
              {...register("companyName", { required: true })}
            >
              <option value="">Select a company</option>
              <option value="Google">Google</option>
              <option value="Microsoft">Microsoft</option>
              <option value="Linear">Linear</option>
              <option value="Notion">Notion</option>
            </select>
            {errors.companyName && <p className="text-red-500">Company name is required</p>}
          </div>

          {/* Minimum Salary */}
          <div className="col-span-2 sm:col-span-1">
            <label className="block text-gray-700">Minimum Salary</label>
            <input
              type="text"
              className="w-full mt-1 p-2 border border-gray-300 rounded"
              {...register("minSalary", { required: true })}
              placeholder="$20k"
            />
            {errors.minSalary && <p className="text-red-500">Minimum salary is required</p>}
          </div>

          {/* Maximum Salary */}
          <div className="col-span-2 sm:col-span-1">
            <label className="block text-gray-700">Maximum Salary</label>
            <input
              type="text"
              className="w-full mt-1 p-2 border border-gray-300 rounded"
              {...register("maxSalary", { required: true })}
              placeholder="$80k"
            />
            {errors.maxSalary && <p className="text-red-500">Maximum salary is required</p>}
          </div>

          {/* Salary Type */}
          <div className="col-span-2 sm:col-span-1">
            <label className="block text-gray-700">Salary Type</label>
            <select
              className="w-full mt-1 p-2 border border-gray-300 rounded"
              {...register("salaryType", { required: true })}
            >
              <option value="">Choose your salary type</option>
              <option value="Hourly">Hourly</option>
              <option value="Monthly">Monthly</option>
              <option value="Yearly">Yearly</option>
            </select>
            {errors.salaryType && <p className="text-red-500">Salary type is required</p>}
          </div>

          {/* Job Posting Date */}
          <div className="col-span-2 sm:col-span-1">
            <label className="block text-gray-700">Job Posting Date</label>
            <input
              type="date"
              className="w-full mt-1 p-2 border border-gray-300 rounded"
              {...register("postingDate", { required: true })}
            />
            {errors.postingDate && <p className="text-red-500">Posting date is required</p>}
          </div>

          {/* Job Location */}
          <div className="col-span-2 sm:col-span-1">
            <label className="block text-gray-700">Job Location</label>
            <input
              type="text"
              className="w-full mt-1 p-2 border border-gray-300 rounded"
              {...register("location", { required: true })}
              placeholder="e.g., San Francisco"
            />
            {errors.location && <p className="text-red-500">Location is required</p>}
          </div>

          {/* Experience Level */}
          <div className="col-span-2 sm:col-span-1">
            <label className="block text-gray-700">Experience Level</label>
            <select
              className="w-full mt-1 p-2 border border-gray-300 rounded"
              {...register("experienceLevel", { required: true })}
            >
              <option value="">Choose experience level</option>
              <option value="Internship">Internship</option>
              <option value="Entry Level">Entry Level</option>
              <option value="Mid Level">Mid Level</option>
              <option value="Senior Level">Senior Level</option>
            </select>
            {errors.experienceLevel && <p className="text-red-500">Experience level is required</p>}
          </div>

          {/* Required Skill Sets */}
          <div className="col-span-2">
            <label className="block text-gray-700">Required Skill Sets</label>
            <Select
              isMulti
              options={skills}
              isSearchable
              placeholder="Select or add skills"
              onChange={handleSkillChange}
              className="mt-1"
              styles={{
                control: (base) => ({
                  ...base,
                  borderColor: errors.skills ? "red" : base.borderColor,
                }),
              }}
              noOptionsMessage={() => "Type to add a skill"}
              createOptionPosition="first"
            />
          </div>

          {/* Company Logo */}
          <div className="col-span-2">
            <label className="block text-gray-700">Company Logo</label>
            <input
              type="url"
              className="w-full mt-1 p-2 border border-gray-300 rounded"
              {...register("companyLogo", { required: true })}
              placeholder="Paste company logo URL"
            />
            {errors.companyLogo && <p className="text-red-500">Company logo URL is required</p>}
          </div>

          {/* Job Description */}
          <div className="col-span-2">
            <label className="block text-gray-700">Job Description</label>
            <textarea
              className="w-full mt-1 p-2 border border-gray-300 rounded"
              {...register("jobDescription", { required: true })}
              rows="4"
              placeholder="Job description"
            />
            {errors.jobDescription && <p className="text-red-500">Job description is required</p>}
          </div>

          {/* Employment Type */}
          <div className="col-span-2 sm:col-span-1">
            <label className="block text-gray-700">Employment Type</label>
            <select
              className="w-full mt-1 p-2 border border-gray-300 rounded"
              {...register("employmentType", { required: true })}
            >
              <option value="">Choose employment type</option>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Contract">Contract</option>
              <option value="Freelance">Freelance</option>
            </select>
            {errors.employmentType && <p className="text-red-500">Employment type is required</p>}
          </div>

          {/* job posted by */}

          <div className="col-span-2">
            <label className="block text-gray-700">Job posted By</label>
            <input type='text'
              className="w-1/2 mt-1 p-2 border border-gray-300 rounded"
              {...register("jobpostedby", { required: true })}
              rows="4"
              placeholder="Job posted By"
            />
            {errors.jobDescription && <p className="text-red-500">Job posted By is required</p>}
          </div>


          {/* Submit Button */}
          <div className="col-span-2">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
            >
              Post Job
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateJob;
