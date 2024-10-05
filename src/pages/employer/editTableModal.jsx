import React, { useEffect, useState } from "react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Select,
  MenuItem,
  Button,
  Grid,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import categoryGet from "../../services/fetchCategory";

// Validation schema using Yup
const schema = yup.object().shape({
  companyName: yup.string().required("Company Name is required"),
  jobTitle: yup.string().required("Job Title is required"),
  jobCategory: yup.string().required("Job Category is required"),
  jobType: yup.string().required("Job Type is required"),
  jobLocation: yup.string().required("Job Location is required"),
  salaryRange: yup.string().required("Salary Range is required"),
  experience: yup.string().required("Experience is required"),
  qualification: yup.string().required("Qualification is required"),
  applicationDeadline: yup
    .date()
    .required("Application Deadline is required")
    .nullable(),
  jobDescription: yup.string().required("Job Description is required"),
});

export default function EditModalJob({ open, handleClose, onSubmit, jobDetails }) {
  const [category, setCategory] = React.useState([]);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      companyName: "",
      jobTitle: "",
      jobCategory: "",
      jobType: "",
      jobLocation: "",
      salaryRange: "",
      experience: "",
      qualification: "",
      applicationDeadline: "",
      jobDescription: "",
    },
  });

  const fetchCategory = async () => {
    const response = await categoryGet();
    if (response) {
      setCategory(response.category);
    }
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  useEffect(() => {
    // When the modal opens for editing, reset the form with the job details
    if (jobDetails) {
      reset({
        companyName: jobDetails.companyName || "",
        jobTitle: jobDetails.jobTitle || "",
        jobCategory: jobDetails.jobCategory || "",
        jobType: jobDetails.jobType || "",
        jobLocation: jobDetails.jobLocation || "",
        salaryRange: jobDetails.salaryRange || "",
        experience: jobDetails.experience || "",
        qualification: jobDetails.qualification || "",
        applicationDeadline: jobDetails.applicationDeadline || "",
        jobDescription: jobDetails.jobDescription || "",
      });
    } else {
      reset(); // Reset to default values when creating a new job
    }
  }, [jobDetails, reset]);

  const handleFormSubmit = (data) => {
    onSubmit(data); // Pass the form data to the parent component (create/update job)
    reset();        // Reset the form after submission
    handleClose();  // Close the modal
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-job-form"
      aria-describedby="modal-job-form-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          maxHeight: "90vh",
          overflowY: "auto",
        }}
      >
        <Typography
          id="modal-job-form"
          variant="h6"
          component="h2"
          gutterBottom
        >
          {jobDetails ? "Edit Job" : "Post a Job"} {/* Change title based on mode */}
        </Typography>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Controller
                name="companyName"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Company Name"
                    error={!!errors.companyName}
                    helperText={errors.companyName?.message}
                  />
                )}
              />
            </Grid>

            <Grid item xs={12}>
              <Controller
                name="jobTitle"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Job Title"
                    error={!!errors.jobTitle}
                    helperText={errors.jobTitle?.message}
                  />
                )}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <Controller
                name="jobCategory"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    fullWidth
                    displayEmpty
                    error={!!errors.jobCategory}
                  >
                    <MenuItem value="" disabled>
                      Job category
                    </MenuItem>
                    {category.map((data) => (
                      <MenuItem key={data._id} value={data.categoryName}>
                        {data.categoryName}
                      </MenuItem>
                    ))}
                  </Select>
                )}
              />
              {errors.jobCategory && (
                <Typography color="error">
                  {errors.jobCategory.message}
                </Typography>
              )}
            </Grid>

            <Grid item xs={12} sm={6}>
              <Controller
                name="jobType"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    fullWidth
                    displayEmpty
                    error={!!errors.jobType}
                  >
                    <MenuItem value="" disabled>
                      Job Type
                    </MenuItem>
                    <MenuItem value="Full Time">Full Time</MenuItem>
                    <MenuItem value="Part Time">Part Time</MenuItem>
                    <MenuItem value="Contract">Contract</MenuItem>
                  </Select>
                )}
              />
              {errors.jobType && (
                <Typography color="error">{errors.jobType.message}</Typography>
              )}
            </Grid>

            {/* Additional fields remain unchanged */}
            {/* ... */}
            
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                {jobDetails ? "Update Job" : "Post Job"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Modal>
  );
}
