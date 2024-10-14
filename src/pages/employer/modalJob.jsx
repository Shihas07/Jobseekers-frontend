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
  // companyWebsite: yup.string().url('Invalid URL').required('Company Website is required'),
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

export default function ModalJob({ open, handleClose, onSubmit }) {
  const [category, setCategory] = React.useState([]);
  // console.log("category", category);
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      companyName: "",
      // companyWebsite: '',
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

  // const onSubmit = (data) => {
  //   console.log("data", data);
  //   // Here you would typically send the data to your backend
  //   handleClose();
  //   reset();
  // };

  const handleFormSubmit = (data) => {
    console.log("jobaddData",data)
    onSubmit(data);  
    reset();         
    handleClose();   
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
          Post a Job
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
                name="companyWebsite"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Company Website"
                    error={!!errors.companyWebsite}
                    helperText={errors.companyWebsite?.message}
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

                    {/* <MenuItem value="" disabled>Job Category</MenuItem>
                    <MenuItem value="Technology">Technology</MenuItem>
                    <MenuItem value="Marketing">Marketing</MenuItem>
                    <MenuItem value="Sales">Sales</MenuItem> */}
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
            <Grid item xs={12}>
              <Controller
                name="jobLocation"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Job Location"
                    error={!!errors.jobLocation}
                    helperText={errors.jobLocation?.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="salaryRange"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Salary Range"
                    error={!!errors.salaryRange}
                    helperText={errors.salaryRange?.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="experience"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Experience"
                    error={!!errors.experience}
                    helperText={errors.experience?.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="qualification"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Qualification"
                    error={!!errors.qualification}
                    helperText={errors.qualification?.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="applicationDeadline"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Application Deadline"
                    type="date"
                    InputLabelProps={{ shrink: true }}
                    error={!!errors.applicationDeadline}
                    helperText={errors.applicationDeadline?.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="jobDescription"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Job Description"
                    multiline
                    rows={4}
                    error={!!errors.jobDescription}
                    helperText={errors.jobDescription?.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="keyResponsibilties"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="key Responsibilties"
                    multiline
                    rows={4}
                    error={!!errors.jobDescription}
                    // helperText={errors.jobDescription?.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="profesionalskill"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="profesional skill"
                    multiline
                    rows={4}
                    error={!!errors.jobDescription}
                    // helperText={errors.profesionalskill?.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Post Job
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Modal>
  );
}
