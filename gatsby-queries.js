'use strict'


module.exports = `
   {
      
      
      allWordpressPage {
         edges {
            node {
               id
               slug
               status
               template
            }
         }
      }

      allWordpressPost {
         edges {
            node {
               id
               slug
               status
               template
               format
               title
               date
               
            }
         }
      }


   }
`

// featured_media{
//    localFile{
//       childImageSharp{
//          resize(width:500, height:200){
//             src
//          }
//       }
//    }
// }