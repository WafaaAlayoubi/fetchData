import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


const Post = ({ post }) => {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined" >
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {post.title}
        </Typography>
        <Typography variant="body2">
         {post.body}
        </Typography>
      </CardContent>
      </Card>
    </Box>
  )
}

export default Post
