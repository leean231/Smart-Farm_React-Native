import React, {useState, useEffect} from "react";
import { View, Text, Image, StyleSheet,TouchableOpacity } from "react-native";
import { Divider } from "react-native-elements";
import {firebase, db} from '../../firebase'


//This is for all the icons below the post.
const postFooterIcons = [
  {
    name:'Like',
    imageUrl:'https://img.icons8.com/nolan/256/like.png',
    likedImageUrl:'https://img.icons8.com/nolan/256/filled-like.png'
  },
  {
    name:'Comment',
    imageUrl:'https://img.icons8.com/nolan/256/1A6DFF/C822FF/speech-bubble-with-dots.png'
  },
  {
    name:'Share',
    imageUrl:'https://img.icons8.com/nolan/256/1A6DFF/C822FF/share-2.png'
  },
  {
    name: 'Save',
    imageUrl:'https://img.icons8.com/nolan/256/1A6DFF/C822FF/pin.png'
  }
]

//This part is used for rendering
const Post = ({ post }) => {
  const handleLike = post => {
    const currentLikeStatus = !post.likes_by_users.includes(
      firebase.auth().currentUser.email
    )
    db.collection('users')
    .doc(post.owner_email)
    .collection('posts')
    .doc(post.id)
    .update({
      likes_by_users : currentLikeStatus 
      ? firebase.firestore.FieldValue.arrayUnion(
        firebase.auth().currentUser.email
        ) 
        : firebase.firestore.FieldValue.arrayRemove(
           firebase.auth().currentUser.email
      ),
    })
    .then(() =>{
      console.log('document successfully added')
    })
    .catch(error => {
      console.log('Error updating document', error)
    })
  }
  return (
    <View style={{ marginBottom: 30 }}>
      <Divider width={1} orientation = 'vertical' />
     <PostHeader post={post} />
     <PostImage post={post}/>
     <View style={{marginHorizotal:15, marginTop:10}}>
     <PostFooter post={post} handleLike={handleLike}/>
     <Likes post={post}/>
     <Caption post={post}/>
     <CommentSection post={post}/>
     <Comments post={post}/>
     </View>
    </View>
  )
}

//This is part is used for the Header part of the post life for the profile pic,name etc
const PostHeader =({post}) =>(
  <View style={{
    flexDirection:'row', 
    justifyContent:'space-between', 
    margin:5, 
    alignItems:'center'}}>
    
   <View style={{flexDirection:'row', alignItems:'center'}}>
     <Image source={{ uri: post.profile_picture}} style={styles.reminders} />
     <Text style={{color:'white', marginLeft:5, fontWeight: '700'}}>{post.user}</Text>
   </View>
   <Text style={{color:'white',fontWeight: '900'}}>...</Text>
  </View>
)

//This is used for the the post. It displays the post a user is posting.
const PostImage = ({post}) => (
  <View style ={{
    width:'100%',
    height:450}}>
   <Image 
    source={{uri:post.imageUrl}} 
    style={{height:'100%', resizeMode:'cover'}}
   />
  </View>
)

//This is for icons just below each posts.
const PostFooter = ({handleLike, post}) =>(
 <View style={{flexDirection:'row'}}>
  <View style={styles.leftFooterIconsContainer}>
  <TouchableOpacity onPress={() => handleLike(post)}>
    <Image style={styles.footerIcon} source={{
      uri: post.likes_by_users.includes(
        firebase.auth().currentUser.email
        ) ? postFooterIcons[0].likedImageUrl 
        : postFooterIcons[0].imageUrl,
        }}/>
  </TouchableOpacity>  
    <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[1].imageUrl}/>
    <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[2].imageUrl}/>
    
  </View>
     <View style={{flex:1, alignItems:'flex-end'}}>
       <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[3].imageUrl}/>
     </View>
 </View>
)

//This part is used so that when the icons are clicked or touched it reacts.
const Icon =({imgStyle, imgUrl}) =>(
  <TouchableOpacity>
    <Image style={imgStyle} source={{uri:imgUrl}}/>  
  </TouchableOpacity>
)

//This part is used to show the totol number of like a user has got for the post
const Likes =({post}) =>(
  <View style={{flexDirection:'row', marginTop:4}}>
  <Text style={{color:'white', fontWeight:'600'}}>{post.likes_by_users.length.toLocaleString('en')} likes</Text>
  </View>
)

//This is to show any description the user has mentioned below his/her post.
const Caption =({post}) =>(
<View style={{marginTop:5}}>  
  <Text style={{color:'white'}}>
       <Text style={{fontWeight:'600'}}>{post.user}</Text>
       <Text> {post.caption}</Text>
  </Text>
</View>  
)

//This part is for the cooments the user has got for his or her posts
// a) 0 comments Don't render component 
// b) 1 comment then render component without "all" and singular comment  
// c) 2 comment then render component with "all" and plural comments
const CommentSection=({post}) =>(
  <View style={{marginTop:5}}> 
   {!!post.comments.length &&(
   <Text style={{color:'gray'}}>
      View {post.comments.length > 1 ? 'all':''} {post.comments.length}{''} 
       {post.comments.length > 1 ? ' comments': ' comment'}
   </Text>
   )}
  </View>
)

//This part is to display the comments the user have got
const Comments = ({ post }) => (
  <>
    {post.comments && post.comments.map((comment, index) => (
      <View key={index} style={{ flexDirection: 'row', marginTop: 5 }}>
        <Text style={{ color: 'white' }}>
          <Text style={{ fontWeight: '600' }}>{comment.user}</Text>{' '}
          {comment.comment}
        </Text>
      </View>
    ))}
  </>
);

//styles 
const styles = StyleSheet.create({
  // to manage the size of profile image
  reminders: {
    width: 35,
    height: 35,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 1.6,
    borderColor: "#0d98ba"
  },
// to manage the size of icons in the footer.
  footerIcon:{
    width:33,
    height:33,
  },
//to mange the icons of left side of the post.
  leftFooterIconsContainer:{
    flexDirection:'row',
    width:'32%',
    justifyContent:'space-between',
  }
})
export default Post;