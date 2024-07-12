import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  Avatar,
  Box,
  Typography,
  Divider,
  Grid,
  CircularProgress,
  Alert,
  Paper,
} from "@mui/material";

const ProfilePage = () => {
  const [user, setUser] = useState("");
  const token = useSelector((state) => state.token);
  const { userId } = useParams();

  const getUser = async () => {
    try {
      const response = await fetch(`http://localhost:3001/user/${userId}`, {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getUser();
  }, [userId, token]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f0f0f0",
        padding: 2,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          maxWidth: 800,
          width: "100%",
          padding: 3,
          borderRadius: 3,
          backgroundColor: "#f9f9f9",
        }}
      >
        <Box sx={{ textAlign: "center", marginBottom: 3 }}>
          <Avatar
            src={user.picturePath}
            alt="Profile"
            sx={{
              width: 120,
              height: 120,
              margin: "0 auto",
              border: "2px solid #3f51b5",
              boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
            }}
          />
          <Typography
            variant="h4"
            component="h2"
            sx={{ marginTop: 2, fontWeight: "bold", color: "#3f51b5" }}
          >
            {user.firstName} {user.lastName}
          </Typography>
          <Typography
            variant="body1"
            color="textSecondary"
            sx={{ fontStyle: "italic" }}
          >
            {user.occupation}
          </Typography>
          <Typography variant="body1" color="textSecondary">
            {user.location}
          </Typography>
        </Box>
        <Divider sx={{ marginBottom: 3 }} />
        <Box sx={{ marginTop: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                Email:
              </Typography>
              <Typography variant="body1" color="textSecondary">
                {user.email}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                Friends:
              </Typography>
              <Typography variant="body1" color="textSecondary">
                {user.friends?.length || 0}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                Profile Views:
              </Typography>
              <Typography variant="body1" color="textSecondary">
                {user.viwedProfile}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                Impressions:
              </Typography>
              <Typography variant="body1" color="textSecondary">
                {user.impressions}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                Joined:
              </Typography>
              <Typography variant="body1" color="textSecondary">
                {new Date(user.createdAt).toLocaleDateString()}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                Last Updated:
              </Typography>
              <Typography variant="body1" color="textSecondary">
                {new Date(user.updatedAt).toLocaleDateString()}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Box>
  );
};

export default ProfilePage;
