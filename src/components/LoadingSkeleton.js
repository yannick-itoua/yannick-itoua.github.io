import React from 'react';
import { Box, Skeleton, Container, Grid } from '@mui/material';

const LoadingSkeleton = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 8 }}>
        {/* Hero Section Skeleton */}
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={8}>
            <Skeleton variant="text" width="80%" height={80} />
            <Skeleton variant="text" width="60%" height={60} />
            <Skeleton variant="text" width="90%" height={40} />
            <Skeleton variant="text" width="70%" height={40} />
            <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
              <Skeleton variant="rectangular" width={150} height={50} />
              <Skeleton variant="rectangular" width={150} height={50} />
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Skeleton variant="circular" width={200} height={200} sx={{ mx: 'auto' }} />
          </Grid>
        </Grid>

        {/* Projects Section Skeleton */}
        <Box sx={{ mt: 8 }}>
          <Skeleton variant="text" width="40%" height={60} sx={{ mx: 'auto', mb: 4 }} />
          {[1, 2, 3].map((_, index) => (
            <Box key={index} sx={{ mb: 4 }}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Skeleton variant="rectangular" height={200} />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Skeleton variant="text" height={40} />
                  <Skeleton variant="text" height={20} />
                  <Skeleton variant="text" height={20} />
                  <Skeleton variant="text" height={20} />
                  <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
                    <Skeleton variant="rectangular" width={80} height={30} />
                    <Skeleton variant="rectangular" width={80} height={30} />
                    <Skeleton variant="rectangular" width={80} height={30} />
                  </Box>
                </Grid>
              </Grid>
            </Box>
          ))}
        </Box>

        {/* Skills Section Skeleton */}
        <Box sx={{ mt: 8 }}>
          <Skeleton variant="text" width="40%" height={60} sx={{ mx: 'auto', mb: 4 }} />
          <Grid container spacing={3}>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => (
              <Grid item xs={6} sm={4} md={3} key={index}>
                <Box sx={{ textAlign: 'center' }}>
                  <Skeleton variant="rectangular" width={60} height={60} sx={{ mx: 'auto', mb: 1 }} />
                  <Skeleton variant="text" width="80%" sx={{ mx: 'auto' }} />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default LoadingSkeleton;
