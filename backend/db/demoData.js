import mongoose from 'mongoose';
import Post from '../models/postModel.js';

const ObjectId = mongoose.Types.ObjectId;

// Connect to MongoDB
mongoose.connect(
  'mongodb+srv://comder6674:v5Je7HKlbS0Z0BJC@cluster0.iotpazz.mongodb.net/social',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// Function to create demo posts
const createDemoPosts = async () => {
  try {
    // Array of demo post objects
    const demoPosts = [
      {
        postedBy: '662f48c6eed063e230d89b51',
        text: 'This is the first demo post',
        img: 'https://media.licdn.com/dms/image/D5622AQG_4a4TQlG9Gw/feedshare-shrink_800/0/1714318826452?e=1717027200&v=beta&t=cLtYgh3BGzuOKMQD7dhbM9X8niC0fLXpuEbOmmKVzHY',
        likes: [new ObjectId('612f4c3c28521f1be8ef2231'), new ObjectId('612f4c3c28521f1be8ef2232')],
        replies: [
          {
            userId: new ObjectId('612f4c3c28521f1be8ef2233'),
            text: 'Reply to the first post',
            userProfilePic: 'profile-pic-url2.jpg',
            username: 'user2',
          },
          {
            userId: new ObjectId('612f4c3c28521f1be8ef2234'),
            text: 'Another reply to the first post',
            userProfilePic: 'profile-pic-url3.jpg',
            username: 'user3',
          },
        ],
      },
      // Add more demo posts as needed
    ];

    // Insert demo posts into the database
    await Post.insertMany(demoPosts);

    console.log('Demo posts created successfully');
  } catch (error) {
    console.error('Error creating demo posts:', error);
  }
};

// Call the function to create demo posts
createDemoPosts();
