/* eslint-disable no-console */
const Campground = require('./models/campground');
const Comment = require('./models/comment');

const seeds = [
  {
    name: "Cloud's Rest",
    price: '4.50',
    image: 'https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    author: {
      id: '588c2e092403d111454fff76',
      username: 'Jack',
    },
  },
  {
    name: 'Desert Mesa',
    price: '5.75',
    image: 'https://farm6.staticflickr.com/5487/11519019346_f66401b6c1.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    author: {
      id: '588c2e092403d111454fff76',
      username: 'Jill',
    },
  },
  {
    name: 'Canyon Floor',
    price: '10.75',
    image: 'https://farm1.staticflickr.com/189/493046463_841a18169e.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    author: {
      id: '588c2e092403d111454fff76',
      username: 'Jane',
    },
  },
  {
    name: 'My Hero Academia',
    price: '10.00',
    image: 'https://i.imgur.com/ZBuN8Yd.jpg',
    description: 'Opening 3 Sora Ni Utaba Final wallpaper',
    author: {
      id: '588c2e092403d111454fff76',
      username: 'Jane',
    },
  },
  {
    name: 'Fire Force',
    price: '8.88',
    image: 'https://fsb.zobj.net/crop.php?r=sFbIuwpKbBIbwPuzDpnRd_DpnnTem1z0LwTNPVFOzUq7ZrGAgDX550b-clbX_O09atzwGpQkxWhfdRGZ9D8gH-eZM5qR_US-cA5aCy-k4cXcCrfo9SQAb6d8c0B52BFH9eLY0IQwUcu_6O84IjAIkAlRyc9_WSqkOrx_pxUyhP6gjNrBnV_Ou3FwGVqOQRz1Mtg3XkFMYabUXyHf',
    description: 'Tokyo is burning, and citizens are mysteriously suffering from spontaneous human combustion all throughout the city! Responsible for snuffing out this inferno is the Fire Force, and Shinra is ready to join their fight. Now, as part of Company 8, he’ll use his devil’s footprints to help keep the city from turning to ash! But his past and a burning secret behind the scenes could set everything ablaze.',
    author: {
      id: '5e004b38e7f657644deaca94',
      username: 'EpicN',
    },
  },
];

async function seedDB() {
  try {
    await Campground.deleteMany({});
    console.log('Removed campgrounds');
    await Comment.deleteMany({});
    console.log('Removed comments');

    seeds.forEach(async (seed) => {
      const campground = await Campground.create(seed);
      console.log('Campground created');
      const comment = await Comment.create(
        {
          text: 'This place is great, but I wish there was internet.',
          author: {
            id: '588c2e092403d111454fff76',
            username: 'Jack',
          },
        },
      );
      console.log('Comment created');
      campground.comments.push(comment);
      campground.save();
      console.log('Comment added to campground');
    });
  } catch (err) {
    console.log(err);
  }


  // // Removes all campgrounds.
  // Campground.deleteMany({}, (err) => {
  //   if (err) {
  //     console.log(err);
  //   }
  //   Comment.deleteMany({}, (err2) => {
  //     if (err) {
  //       console.log(err2);
  //     }
  //     console.log('removed comments!');
  //     console.log('Removed all campgrounds.\n');
  //     // Adds a few campgrounds.
  //     data.forEach((seed) => {
  //       Campground.create(seed, (err3, campground) => {
  //         if (err2) {
  //           console.log(err);
  //         } else {
  //           console.log('Added a new campground');
  //           // Create a comment.
  //           Comment.create(
  //             {
  //               text: 'This place is great, but I wish there was internet.',
  //               author: 'Homer',
  //             }, (err4, comment) => {
  //               if (err4) {
  //                 console.log(err4);
  //               } else {
  //                 campground.comments.push(comment);
  //                 campground.save();
  //                 console.log('Created new comment');
  //               }
  //             },
  //           );
  //         }
  //       });
  //     });
  //   });
  // });
}

module.exports = seedDB;


/*
var Comment   = require("./models/comment");


function seedDB(){
   //Remove all campgrounds
   Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed campgrounds!");
        Comment.remove({}, function(err) {
            if(err){
                console.log(err);
            }
            console.log("removed comments!");
             //add a few campgrounds
            data.forEach(function(seed){
                Campground.create(seed, function(err, campground){
                    if(err){
                        console.log(err)
                    } else {
                        console.log("added a campground");
                        //create a comment
                        Comment.create(
                            {
                                text: "This place is great, but I wish there was internet",
                                author: "Homer"
                            }, function(err, comment){
                                if(err){
                                    console.log(err);
                                } else {
                                    campground.comments.push(comment);
                                    campground.save();
                                    console.log("Created new comment");
                                }
                            });
                    }
                });
            });
        });
    });
    //add a few comments
}

module.exports = seedDB;
*/
