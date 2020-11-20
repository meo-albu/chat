import { motion } from "framer-motion"
import { useSelector } from "react-redux"
const svgStyle = {
  position: 'fixed', 
  right: '35%', 
  top: '50%', 
  transform: 'translate(50%, -50%) scale(1.2)',
  zIndex: '0'
}
const Background = () => {
  const darkTheme = useSelector(state => state.themeReducer.darkTheme)
  
  return (
    darkTheme ? 
      <svg width="1260.95" height="1090.368" viewBox="0 0 1260.95 1090.368" style={svgStyle}>
        <g transform="translate(-154.628 105.719)">
          <motion.g
            initial={{y: '-10px', opacity: 0}}
            animate={{y: '10px', opacity: 1}}
            transition={{
              y: {yoyo: Infinity, duration: 1},
              opacity: {delay: 0.5, duration: 0.5}
            }}
            style={{overflow: 'hidden'}}
          >
            <g 
            id="Group_28" 
            data-name="Group 28" 
            transform="matrix(0.966, 0.259, -0.259, 0.966, 131.386, -185.471)">
            <rect id="Rectangle_16" data-name="Rectangle 16" width="211.204" height="308.358" rx="16" transform="translate(800.489 233.075)" fill="#242424"/>
            <ellipse id="Ellipse_6" data-name="Ellipse 6" cx="6.836" cy="7.04" rx="6.836" ry="7.04" transform="translate(815.977 252.787)" fill="#0f0f0f"/>
            <rect id="Rectangle_20" data-name="Rectangle 20" width="47.873" height="4.224" rx="2" transform="translate(837.098 255.604)" fill="#0f0f0f"/>
            <rect id="Rectangle_21" data-name="Rectangle 21" width="18.304" height="4.224" rx="2" transform="translate(837.098 261.236)" fill="#444"/>
            <ellipse id="Ellipse_4" data-name="Ellipse 4" cx="3.52" cy="4.224" rx="3.52" ry="4.224" transform="translate(990.573 304.885)" fill="#144c4e"/>
            <ellipse id="Ellipse_8" data-name="Ellipse 8" cx="3.52" cy="4.224" rx="3.52" ry="4.224" transform="translate(990.573 385.142)" fill="#144c4e"/>
            <circle id="Ellipse_5" data-name="Ellipse 5" cx="2.816" cy="2.816" r="2.816" transform="translate(815.977 286.58)" fill="#444"/>
            <circle id="Ellipse_7" data-name="Ellipse 7" cx="2.816" cy="2.816" r="2.816" transform="translate(815.977 345.717)" fill="#444"/>
            <rect id="Rectangle_17" data-name="Rectangle 17" width="66.177" height="11.264" rx="3" transform="translate(828.649 286.58)" fill="#444"/>
            <rect id="Rectangle_23" data-name="Rectangle 23" width="66.177" height="11.264" rx="3" transform="translate(828.649 345.717)" fill="#444"/>
            <rect id="Rectangle_24" data-name="Rectangle 24" width="45.057" height="12.672" rx="3" transform="translate(828.649 365.43)" fill="#444"/>
            <rect id="Rectangle_19" data-name="Rectangle 19" width="66.177" height="12.672" rx="3" transform="translate(917.355 304.885)" fill="#144c4e"/>
            <rect id="Rectangle_25" data-name="Rectangle 25" width="66.177" height="12.672" rx="3" transform="translate(917.355 385.142)" fill="#144c4e"/>
            <rect id="Rectangle_22" data-name="Rectangle 22" width="43.649" height="12.672" rx="3" transform="translate(939.884 324.597)" fill="#144c4e"/>
            <ellipse id="Ellipse_4-2" data-name="Ellipse 4" cx="3.52" cy="2.816" rx="3.52" ry="2.816" transform="translate(990.573 430.199)" fill="#144c4e"/>
            <ellipse id="Ellipse_5-2" data-name="Ellipse 5" cx="2.816" cy="3.52" rx="2.816" ry="3.52" transform="translate(815.977 410.487)" fill="#444"/>
            <ellipse id="Ellipse_7-2" data-name="Ellipse 7" cx="2.816" cy="3.52" rx="2.816" ry="3.52" transform="translate(815.977 469.624)" fill="#444"/>
            <rect id="Rectangle_17-2" data-name="Rectangle 17" width="66.177" height="11.264" rx="3" transform="translate(828.649 410.487)" fill="#444"/>
            <rect id="Rectangle_23-2" data-name="Rectangle 23" width="66.177" height="12.672" rx="3" transform="translate(828.649 469.624)" fill="#444"/>
            <rect id="Rectangle_19-2" data-name="Rectangle 19" width="66.177" height="12.672" rx="3" transform="translate(917.355 430.199)" fill="#144c4e"/>
            <rect id="Rectangle_22-2" data-name="Rectangle 22" width="43.649" height="12.672" rx="3" transform="translate(939.884 448.503)" fill="#144c4e"/>
            <rect id="Rectangle_18" data-name="Rectangle 18" width="161.923" height="16.896" rx="3" transform="translate(815.977 504.825)" fill="#444"/>
            <path id="Polygon_1" data-name="Polygon 1" d="M2.6,2.215a1,1,0,0,1,1.846,0l2.02,4.848A1,1,0,0,1,5.54,8.448H1.5A1,1,0,0,1,.577,7.064Z" transform="translate(997.613 509.049) rotate(90)" fill="#444"/>
          </g>
          </motion.g>
          <g id="Group_35" data-name="Group 35" transform="matrix(0.966, 0.259, -0.259, 0.966, -151.274, -181.494)" opacity="0.26">
            <rect id="Rectangle_16-2" data-name="Rectangle 16" width="211.204" height="308.358" rx="16" transform="translate(800.489 233.075)" fill="#242424"/>
            <ellipse id="Ellipse_6-2" data-name="Ellipse 6" cx="6.836" cy="7.04" rx="6.836" ry="7.04" transform="translate(815.977 252.787)" fill="#0f0f0f"/>
            <rect id="Rectangle_20-2" data-name="Rectangle 20" width="47.873" height="4.224" rx="2" transform="translate(837.098 255.604)" fill="#0f0f0f"/>
            <rect id="Rectangle_21-2" data-name="Rectangle 21" width="18.304" height="4.224" rx="2" transform="translate(837.098 261.236)" fill="#444"/>
            <ellipse id="Ellipse_4-3" data-name="Ellipse 4" cx="3.52" cy="4.224" rx="3.52" ry="4.224" transform="translate(990.573 304.885)" fill="#144c4e"/>
            <ellipse id="Ellipse_8-2" data-name="Ellipse 8" cx="3.52" cy="4.224" rx="3.52" ry="4.224" transform="translate(990.573 385.142)" fill="#144c4e"/>
            <circle id="Ellipse_5-3" data-name="Ellipse 5" cx="2.816" cy="2.816" r="2.816" transform="translate(815.977 286.58)" fill="#444"/>
            <circle id="Ellipse_7-3" data-name="Ellipse 7" cx="2.816" cy="2.816" r="2.816" transform="translate(815.977 345.717)" fill="#444"/>
            <rect id="Rectangle_17-3" data-name="Rectangle 17" width="66.177" height="11.264" rx="3" transform="translate(828.649 286.58)" fill="#444"/>
            <rect id="Rectangle_23-3" data-name="Rectangle 23" width="66.177" height="11.264" rx="3" transform="translate(828.649 345.717)" fill="#444"/>
            <rect id="Rectangle_24-2" data-name="Rectangle 24" width="45.057" height="12.672" rx="3" transform="translate(828.649 365.43)" fill="#444"/>
            <rect id="Rectangle_19-3" data-name="Rectangle 19" width="66.177" height="12.672" rx="3" transform="translate(917.355 304.885)" fill="#144c4e"/>
            <rect id="Rectangle_25-2" data-name="Rectangle 25" width="66.177" height="12.672" rx="3" transform="translate(917.355 385.142)" fill="#144c4e"/>
            <rect id="Rectangle_22-3" data-name="Rectangle 22" width="43.649" height="12.672" rx="3" transform="translate(939.884 324.597)" fill="#144c4e"/>
            <ellipse id="Ellipse_4-4" data-name="Ellipse 4" cx="3.52" cy="2.816" rx="3.52" ry="2.816" transform="translate(990.573 430.199)" fill="#144c4e"/>
            <ellipse id="Ellipse_5-4" data-name="Ellipse 5" cx="2.816" cy="3.52" rx="2.816" ry="3.52" transform="translate(815.977 410.487)" fill="#444"/>
            <ellipse id="Ellipse_7-4" data-name="Ellipse 7" cx="2.816" cy="3.52" rx="2.816" ry="3.52" transform="translate(815.977 469.624)" fill="#444"/>
            <rect id="Rectangle_17-4" data-name="Rectangle 17" width="66.177" height="11.264" rx="3" transform="translate(828.649 410.487)" fill="#444"/>
            <rect id="Rectangle_23-4" data-name="Rectangle 23" width="66.177" height="12.672" rx="3" transform="translate(828.649 469.624)" fill="#444"/>
            <rect id="Rectangle_19-4" data-name="Rectangle 19" width="66.177" height="12.672" rx="3" transform="translate(917.355 430.199)" fill="#144c4e"/>
            <rect id="Rectangle_22-4" data-name="Rectangle 22" width="43.649" height="12.672" rx="3" transform="translate(939.884 448.503)" fill="#144c4e"/>
            <rect id="Rectangle_18-2" data-name="Rectangle 18" width="161.923" height="16.896" rx="3" transform="translate(815.977 504.825)" fill="#444"/>
            <path id="Polygon_1-2" data-name="Polygon 1" d="M2.6,2.215a1,1,0,0,1,1.846,0l2.02,4.848A1,1,0,0,1,5.54,8.448H1.5A1,1,0,0,1,.577,7.064Z" transform="translate(997.613 509.049) rotate(90)" fill="#444"/>
          </g>
          <g id="Group_38" data-name="Group 38" transform="matrix(0.966, 0.259, -0.259, 0.966, -383.983, -363.94)" opacity="0.26">
            <rect id="Rectangle_16-3" data-name="Rectangle 16" width="211.204" height="308.358" rx="16" transform="translate(800.489 233.075)" fill="#242424"/>
            <ellipse id="Ellipse_6-3" data-name="Ellipse 6" cx="6.836" cy="7.04" rx="6.836" ry="7.04" transform="translate(815.977 252.787)" fill="#0f0f0f"/>
            <rect id="Rectangle_20-3" data-name="Rectangle 20" width="47.873" height="4.224" rx="2" transform="translate(837.098 255.604)" fill="#0f0f0f"/>
            <rect id="Rectangle_21-3" data-name="Rectangle 21" width="18.304" height="4.224" rx="2" transform="translate(837.098 261.236)" fill="#444"/>
            <ellipse id="Ellipse_4-5" data-name="Ellipse 4" cx="3.52" cy="4.224" rx="3.52" ry="4.224" transform="translate(990.573 304.885)" fill="#144c4e"/>
            <ellipse id="Ellipse_8-3" data-name="Ellipse 8" cx="3.52" cy="4.224" rx="3.52" ry="4.224" transform="translate(990.573 385.142)" fill="#144c4e"/>
            <circle id="Ellipse_5-5" data-name="Ellipse 5" cx="2.816" cy="2.816" r="2.816" transform="translate(815.977 286.58)" fill="#444"/>
            <circle id="Ellipse_7-5" data-name="Ellipse 7" cx="2.816" cy="2.816" r="2.816" transform="translate(815.977 345.717)" fill="#444"/>
            <rect id="Rectangle_17-5" data-name="Rectangle 17" width="66.177" height="11.264" rx="3" transform="translate(828.649 286.58)" fill="#444"/>
            <rect id="Rectangle_23-5" data-name="Rectangle 23" width="66.177" height="11.264" rx="3" transform="translate(828.649 345.717)" fill="#444"/>
            <rect id="Rectangle_24-3" data-name="Rectangle 24" width="45.057" height="12.672" rx="3" transform="translate(828.649 365.43)" fill="#444"/>
            <rect id="Rectangle_19-5" data-name="Rectangle 19" width="66.177" height="12.672" rx="3" transform="translate(917.355 304.885)" fill="#144c4e"/>
            <rect id="Rectangle_25-3" data-name="Rectangle 25" width="66.177" height="12.672" rx="3" transform="translate(917.355 385.142)" fill="#144c4e"/>
            <rect id="Rectangle_22-5" data-name="Rectangle 22" width="43.649" height="12.672" rx="3" transform="translate(939.884 324.597)" fill="#144c4e"/>
            <ellipse id="Ellipse_4-6" data-name="Ellipse 4" cx="3.52" cy="2.816" rx="3.52" ry="2.816" transform="translate(990.573 430.199)" fill="#144c4e"/>
            <ellipse id="Ellipse_5-6" data-name="Ellipse 5" cx="2.816" cy="3.52" rx="2.816" ry="3.52" transform="translate(815.977 410.487)" fill="#444"/>
            <ellipse id="Ellipse_7-6" data-name="Ellipse 7" cx="2.816" cy="3.52" rx="2.816" ry="3.52" transform="translate(815.977 469.624)" fill="#444"/>
            <rect id="Rectangle_17-6" data-name="Rectangle 17" width="66.177" height="11.264" rx="3" transform="translate(828.649 410.487)" fill="#444"/>
            <rect id="Rectangle_23-6" data-name="Rectangle 23" width="66.177" height="12.672" rx="3" transform="translate(828.649 469.624)" fill="#444"/>
            <rect id="Rectangle_19-6" data-name="Rectangle 19" width="66.177" height="12.672" rx="3" transform="translate(917.355 430.199)" fill="#144c4e"/>
            <rect id="Rectangle_22-6" data-name="Rectangle 22" width="43.649" height="12.672" rx="3" transform="translate(939.884 448.503)" fill="#144c4e"/>
            <rect id="Rectangle_18-3" data-name="Rectangle 18" width="161.923" height="16.896" rx="3" transform="translate(815.977 504.825)" fill="#444"/>
            <path id="Polygon_1-3" data-name="Polygon 1" d="M2.6,2.215a1,1,0,0,1,1.846,0l2.02,4.848A1,1,0,0,1,5.54,8.448H1.5A1,1,0,0,1,.577,7.064Z" transform="translate(997.613 509.049) rotate(90)" fill="#444"/>
          </g>
          <g id="Group_33" data-name="Group 33" transform="matrix(0.966, 0.259, -0.259, 0.966, 36.918, 167.091)" opacity="0.26">
            <rect id="Rectangle_16-4" data-name="Rectangle 16" width="211.204" height="308.358" rx="16" transform="translate(800.489 233.075)" fill="#242424"/>
            <ellipse id="Ellipse_6-4" data-name="Ellipse 6" cx="6.836" cy="7.04" rx="6.836" ry="7.04" transform="translate(815.977 252.787)" fill="#0f0f0f"/>
            <rect id="Rectangle_20-4" data-name="Rectangle 20" width="47.873" height="4.224" rx="2" transform="translate(837.098 255.604)" fill="#0f0f0f"/>
            <rect id="Rectangle_21-4" data-name="Rectangle 21" width="18.304" height="4.224" rx="2" transform="translate(837.098 261.236)" fill="#444"/>
            <ellipse id="Ellipse_4-7" data-name="Ellipse 4" cx="3.52" cy="4.224" rx="3.52" ry="4.224" transform="translate(990.573 304.885)" fill="#144c4e"/>
            <ellipse id="Ellipse_8-4" data-name="Ellipse 8" cx="3.52" cy="4.224" rx="3.52" ry="4.224" transform="translate(990.573 385.142)" fill="#144c4e"/>
            <circle id="Ellipse_5-7" data-name="Ellipse 5" cx="2.816" cy="2.816" r="2.816" transform="translate(815.977 286.58)" fill="#444"/>
            <circle id="Ellipse_7-7" data-name="Ellipse 7" cx="2.816" cy="2.816" r="2.816" transform="translate(815.977 345.717)" fill="#444"/>
            <rect id="Rectangle_17-7" data-name="Rectangle 17" width="66.177" height="11.264" rx="3" transform="translate(828.649 286.58)" fill="#444"/>
            <rect id="Rectangle_23-7" data-name="Rectangle 23" width="66.177" height="11.264" rx="3" transform="translate(828.649 345.717)" fill="#444"/>
            <rect id="Rectangle_24-4" data-name="Rectangle 24" width="45.057" height="12.672" rx="3" transform="translate(828.649 365.43)" fill="#444"/>
            <rect id="Rectangle_19-7" data-name="Rectangle 19" width="66.177" height="12.672" rx="3" transform="translate(917.355 304.885)" fill="#144c4e"/>
            <rect id="Rectangle_25-4" data-name="Rectangle 25" width="66.177" height="12.672" rx="3" transform="translate(917.355 385.142)" fill="#144c4e"/>
            <rect id="Rectangle_22-7" data-name="Rectangle 22" width="43.649" height="12.672" rx="3" transform="translate(939.884 324.597)" fill="#144c4e"/>
            <ellipse id="Ellipse_4-8" data-name="Ellipse 4" cx="3.52" cy="2.816" rx="3.52" ry="2.816" transform="translate(990.573 430.199)" fill="#144c4e"/>
            <ellipse id="Ellipse_5-8" data-name="Ellipse 5" cx="2.816" cy="3.52" rx="2.816" ry="3.52" transform="translate(815.977 410.487)" fill="#444"/>
            <ellipse id="Ellipse_7-8" data-name="Ellipse 7" cx="2.816" cy="3.52" rx="2.816" ry="3.52" transform="translate(815.977 469.624)" fill="#444"/>
            <rect id="Rectangle_17-8" data-name="Rectangle 17" width="66.177" height="11.264" rx="3" transform="translate(828.649 410.487)" fill="#444"/>
            <rect id="Rectangle_23-8" data-name="Rectangle 23" width="66.177" height="12.672" rx="3" transform="translate(828.649 469.624)" fill="#444"/>
            <rect id="Rectangle_19-8" data-name="Rectangle 19" width="66.177" height="12.672" rx="3" transform="translate(917.355 430.199)" fill="#144c4e"/>
            <rect id="Rectangle_22-8" data-name="Rectangle 22" width="43.649" height="12.672" rx="3" transform="translate(939.884 448.503)" fill="#144c4e"/>
            <rect id="Rectangle_18-4" data-name="Rectangle 18" width="161.923" height="16.896" rx="3" transform="translate(815.977 504.825)" fill="#444"/>
            <path id="Polygon_1-4" data-name="Polygon 1" d="M2.6,2.215a1,1,0,0,1,1.846,0l2.02,4.848A1,1,0,0,1,5.54,8.448H1.5A1,1,0,0,1,.577,7.064Z" transform="translate(997.613 509.049) rotate(90)" fill="#444"/>
          </g>
          <g id="Group_36" data-name="Group 36" transform="matrix(0.966, 0.259, -0.259, 0.966, -245.743, 171.069)" opacity="0.26">
            <rect id="Rectangle_16-5" data-name="Rectangle 16" width="211.204" height="308.358" rx="16" transform="translate(800.489 233.075)" fill="#242424"/>
            <ellipse id="Ellipse_6-5" data-name="Ellipse 6" cx="6.836" cy="7.04" rx="6.836" ry="7.04" transform="translate(815.977 252.787)" fill="#0f0f0f"/>
            <rect id="Rectangle_20-5" data-name="Rectangle 20" width="47.873" height="4.224" rx="2" transform="translate(837.098 255.604)" fill="#0f0f0f"/>
            <rect id="Rectangle_21-5" data-name="Rectangle 21" width="18.304" height="4.224" rx="2" transform="translate(837.098 261.236)" fill="#444"/>
            <ellipse id="Ellipse_4-9" data-name="Ellipse 4" cx="3.52" cy="4.224" rx="3.52" ry="4.224" transform="translate(990.573 304.885)" fill="#144c4e"/>
            <ellipse id="Ellipse_8-5" data-name="Ellipse 8" cx="3.52" cy="4.224" rx="3.52" ry="4.224" transform="translate(990.573 385.142)" fill="#144c4e"/>
            <circle id="Ellipse_5-9" data-name="Ellipse 5" cx="2.816" cy="2.816" r="2.816" transform="translate(815.977 286.58)" fill="#444"/>
            <circle id="Ellipse_7-9" data-name="Ellipse 7" cx="2.816" cy="2.816" r="2.816" transform="translate(815.977 345.717)" fill="#444"/>
            <rect id="Rectangle_17-9" data-name="Rectangle 17" width="66.177" height="11.264" rx="3" transform="translate(828.649 286.58)" fill="#444"/>
            <rect id="Rectangle_23-9" data-name="Rectangle 23" width="66.177" height="11.264" rx="3" transform="translate(828.649 345.717)" fill="#444"/>
            <rect id="Rectangle_24-5" data-name="Rectangle 24" width="45.057" height="12.672" rx="3" transform="translate(828.649 365.43)" fill="#444"/>
            <rect id="Rectangle_19-9" data-name="Rectangle 19" width="66.177" height="12.672" rx="3" transform="translate(917.355 304.885)" fill="#144c4e"/>
            <rect id="Rectangle_25-5" data-name="Rectangle 25" width="66.177" height="12.672" rx="3" transform="translate(917.355 385.142)" fill="#144c4e"/>
            <rect id="Rectangle_22-9" data-name="Rectangle 22" width="43.649" height="12.672" rx="3" transform="translate(939.884 324.597)" fill="#144c4e"/>
            <ellipse id="Ellipse_4-10" data-name="Ellipse 4" cx="3.52" cy="2.816" rx="3.52" ry="2.816" transform="translate(990.573 430.199)" fill="#144c4e"/>
            <ellipse id="Ellipse_5-10" data-name="Ellipse 5" cx="2.816" cy="3.52" rx="2.816" ry="3.52" transform="translate(815.977 410.487)" fill="#444"/>
            <ellipse id="Ellipse_7-10" data-name="Ellipse 7" cx="2.816" cy="3.52" rx="2.816" ry="3.52" transform="translate(815.977 469.624)" fill="#444"/>
            <rect id="Rectangle_17-10" data-name="Rectangle 17" width="66.177" height="11.264" rx="3" transform="translate(828.649 410.487)" fill="#444"/>
            <rect id="Rectangle_23-10" data-name="Rectangle 23" width="66.177" height="12.672" rx="3" transform="translate(828.649 469.624)" fill="#444"/>
            <rect id="Rectangle_19-10" data-name="Rectangle 19" width="66.177" height="12.672" rx="3" transform="translate(917.355 430.199)" fill="#144c4e"/>
            <rect id="Rectangle_22-10" data-name="Rectangle 22" width="43.649" height="12.672" rx="3" transform="translate(939.884 448.503)" fill="#144c4e"/>
            <rect id="Rectangle_18-5" data-name="Rectangle 18" width="161.923" height="16.896" rx="3" transform="translate(815.977 504.825)" fill="#444"/>
            <path id="Polygon_1-5" data-name="Polygon 1" d="M2.6,2.215a1,1,0,0,1,1.846,0l2.02,4.848A1,1,0,0,1,5.54,8.448H1.5A1,1,0,0,1,.577,7.064Z" transform="translate(997.613 509.049) rotate(90)" fill="#444"/>
          </g>
          <g id="Group_37" data-name="Group 37" transform="matrix(0.966, 0.259, -0.259, 0.966, -478.452, -11.377)" opacity="0.26">
            <rect id="Rectangle_16-6" data-name="Rectangle 16" width="211.204" height="308.358" rx="16" transform="translate(800.489 233.075)" fill="#242424"/>
            <ellipse id="Ellipse_6-6" data-name="Ellipse 6" cx="6.836" cy="7.04" rx="6.836" ry="7.04" transform="translate(815.977 252.787)" fill="#0f0f0f"/>
            <rect id="Rectangle_20-6" data-name="Rectangle 20" width="47.873" height="4.224" rx="2" transform="translate(837.098 255.604)" fill="#0f0f0f"/>
            <rect id="Rectangle_21-6" data-name="Rectangle 21" width="18.304" height="4.224" rx="2" transform="translate(837.098 261.236)" fill="#444"/>
            <ellipse id="Ellipse_4-11" data-name="Ellipse 4" cx="3.52" cy="4.224" rx="3.52" ry="4.224" transform="translate(990.573 304.885)" fill="#144c4e"/>
            <ellipse id="Ellipse_8-6" data-name="Ellipse 8" cx="3.52" cy="4.224" rx="3.52" ry="4.224" transform="translate(990.573 385.142)" fill="#144c4e"/>
            <circle id="Ellipse_5-11" data-name="Ellipse 5" cx="2.816" cy="2.816" r="2.816" transform="translate(815.977 286.58)" fill="#444"/>
            <circle id="Ellipse_7-11" data-name="Ellipse 7" cx="2.816" cy="2.816" r="2.816" transform="translate(815.977 345.717)" fill="#444"/>
            <rect id="Rectangle_17-11" data-name="Rectangle 17" width="66.177" height="11.264" rx="3" transform="translate(828.649 286.58)" fill="#444"/>
            <rect id="Rectangle_23-11" data-name="Rectangle 23" width="66.177" height="11.264" rx="3" transform="translate(828.649 345.717)" fill="#444"/>
            <rect id="Rectangle_24-6" data-name="Rectangle 24" width="45.057" height="12.672" rx="3" transform="translate(828.649 365.43)" fill="#444"/>
            <rect id="Rectangle_19-11" data-name="Rectangle 19" width="66.177" height="12.672" rx="3" transform="translate(917.355 304.885)" fill="#144c4e"/>
            <rect id="Rectangle_25-6" data-name="Rectangle 25" width="66.177" height="12.672" rx="3" transform="translate(917.355 385.142)" fill="#144c4e"/>
            <rect id="Rectangle_22-11" data-name="Rectangle 22" width="43.649" height="12.672" rx="3" transform="translate(939.884 324.597)" fill="#144c4e"/>
            <ellipse id="Ellipse_4-12" data-name="Ellipse 4" cx="3.52" cy="2.816" rx="3.52" ry="2.816" transform="translate(990.573 430.199)" fill="#144c4e"/>
            <ellipse id="Ellipse_5-12" data-name="Ellipse 5" cx="2.816" cy="3.52" rx="2.816" ry="3.52" transform="translate(815.977 410.487)" fill="#444"/>
            <ellipse id="Ellipse_7-12" data-name="Ellipse 7" cx="2.816" cy="3.52" rx="2.816" ry="3.52" transform="translate(815.977 469.624)" fill="#444"/>
            <rect id="Rectangle_17-12" data-name="Rectangle 17" width="66.177" height="11.264" rx="3" transform="translate(828.649 410.487)" fill="#444"/>
            <rect id="Rectangle_23-12" data-name="Rectangle 23" width="66.177" height="12.672" rx="3" transform="translate(828.649 469.624)" fill="#444"/>
            <rect id="Rectangle_19-12" data-name="Rectangle 19" width="66.177" height="12.672" rx="3" transform="translate(917.355 430.199)" fill="#144c4e"/>
            <rect id="Rectangle_22-12" data-name="Rectangle 22" width="43.649" height="12.672" rx="3" transform="translate(939.884 448.503)" fill="#144c4e"/>
            <rect id="Rectangle_18-6" data-name="Rectangle 18" width="161.923" height="16.896" rx="3" transform="translate(815.977 504.825)" fill="#444"/>
            <path id="Polygon_1-6" data-name="Polygon 1" d="M2.6,2.215a1,1,0,0,1,1.846,0l2.02,4.848A1,1,0,0,1,5.54,8.448H1.5A1,1,0,0,1,.577,7.064Z" transform="translate(997.613 509.049) rotate(90)" fill="#444"/>
          </g>
          <g id="Group_32" data-name="Group 32" transform="matrix(0.966, 0.259, -0.259, 0.966, 225.855, -538.034)" opacity="0.26">
            <rect id="Rectangle_16-7" data-name="Rectangle 16" width="211.204" height="308.358" rx="16" transform="translate(800.489 233.075)" fill="#242424"/>
            <ellipse id="Ellipse_6-7" data-name="Ellipse 6" cx="6.836" cy="7.04" rx="6.836" ry="7.04" transform="translate(815.977 252.787)" fill="#0f0f0f"/>
            <rect id="Rectangle_20-7" data-name="Rectangle 20" width="47.873" height="4.224" rx="2" transform="translate(837.098 255.604)" fill="#0f0f0f"/>
            <rect id="Rectangle_21-7" data-name="Rectangle 21" width="18.304" height="4.224" rx="2" transform="translate(837.098 261.236)" fill="#444"/>
            <ellipse id="Ellipse_4-13" data-name="Ellipse 4" cx="3.52" cy="4.224" rx="3.52" ry="4.224" transform="translate(990.573 304.885)" fill="#144c4e"/>
            <ellipse id="Ellipse_8-7" data-name="Ellipse 8" cx="3.52" cy="4.224" rx="3.52" ry="4.224" transform="translate(990.573 385.142)" fill="#144c4e"/>
            <circle id="Ellipse_5-13" data-name="Ellipse 5" cx="2.816" cy="2.816" r="2.816" transform="translate(815.977 286.58)" fill="#444"/>
            <circle id="Ellipse_7-13" data-name="Ellipse 7" cx="2.816" cy="2.816" r="2.816" transform="translate(815.977 345.717)" fill="#444"/>
            <rect id="Rectangle_17-13" data-name="Rectangle 17" width="66.177" height="11.264" rx="3" transform="translate(828.649 286.58)" fill="#444"/>
            <rect id="Rectangle_23-13" data-name="Rectangle 23" width="66.177" height="11.264" rx="3" transform="translate(828.649 345.717)" fill="#444"/>
            <rect id="Rectangle_24-7" data-name="Rectangle 24" width="45.057" height="12.672" rx="3" transform="translate(828.649 365.43)" fill="#444"/>
            <rect id="Rectangle_19-13" data-name="Rectangle 19" width="66.177" height="12.672" rx="3" transform="translate(917.355 304.885)" fill="#144c4e"/>
            <rect id="Rectangle_25-7" data-name="Rectangle 25" width="66.177" height="12.672" rx="3" transform="translate(917.355 385.142)" fill="#144c4e"/>
            <rect id="Rectangle_22-13" data-name="Rectangle 22" width="43.649" height="12.672" rx="3" transform="translate(939.884 324.597)" fill="#144c4e"/>
            <ellipse id="Ellipse_4-14" data-name="Ellipse 4" cx="3.52" cy="2.816" rx="3.52" ry="2.816" transform="translate(990.573 430.199)" fill="#144c4e"/>
            <ellipse id="Ellipse_5-14" data-name="Ellipse 5" cx="2.816" cy="3.52" rx="2.816" ry="3.52" transform="translate(815.977 410.487)" fill="#444"/>
            <ellipse id="Ellipse_7-14" data-name="Ellipse 7" cx="2.816" cy="3.52" rx="2.816" ry="3.52" transform="translate(815.977 469.624)" fill="#444"/>
            <rect id="Rectangle_17-14" data-name="Rectangle 17" width="66.177" height="11.264" rx="3" transform="translate(828.649 410.487)" fill="#444"/>
            <rect id="Rectangle_23-14" data-name="Rectangle 23" width="66.177" height="12.672" rx="3" transform="translate(828.649 469.624)" fill="#444"/>
            <rect id="Rectangle_19-14" data-name="Rectangle 19" width="66.177" height="12.672" rx="3" transform="translate(917.355 430.199)" fill="#144c4e"/>
            <rect id="Rectangle_22-14" data-name="Rectangle 22" width="43.649" height="12.672" rx="3" transform="translate(939.884 448.503)" fill="#144c4e"/>
            <rect id="Rectangle_18-7" data-name="Rectangle 18" width="161.923" height="16.896" rx="3" transform="translate(815.977 504.825)" fill="#444"/>
            <path id="Polygon_1-7" data-name="Polygon 1" d="M2.6,2.215a1,1,0,0,1,1.846,0l2.02,4.848A1,1,0,0,1,5.54,8.448H1.5A1,1,0,0,1,.577,7.064Z" transform="translate(997.613 509.049) rotate(90)" fill="#444"/>
          </g>
          <g id="Group_34" data-name="Group 34" transform="matrix(0.966, 0.259, -0.259, 0.966, -56.805, -534.057)" opacity="0.26">
            <rect id="Rectangle_16-8" data-name="Rectangle 16" width="211.204" height="308.358" rx="16" transform="translate(800.489 233.075)" fill="#242424"/>
            <ellipse id="Ellipse_6-8" data-name="Ellipse 6" cx="6.836" cy="7.04" rx="6.836" ry="7.04" transform="translate(815.977 252.787)" fill="#0f0f0f"/>
            <rect id="Rectangle_20-8" data-name="Rectangle 20" width="47.873" height="4.224" rx="2" transform="translate(837.098 255.604)" fill="#0f0f0f"/>
            <rect id="Rectangle_21-8" data-name="Rectangle 21" width="18.304" height="4.224" rx="2" transform="translate(837.098 261.236)" fill="#444"/>
            <ellipse id="Ellipse_4-15" data-name="Ellipse 4" cx="3.52" cy="4.224" rx="3.52" ry="4.224" transform="translate(990.573 304.885)" fill="#144c4e"/>
            <ellipse id="Ellipse_8-8" data-name="Ellipse 8" cx="3.52" cy="4.224" rx="3.52" ry="4.224" transform="translate(990.573 385.142)" fill="#144c4e"/>
            <circle id="Ellipse_5-15" data-name="Ellipse 5" cx="2.816" cy="2.816" r="2.816" transform="translate(815.977 286.58)" fill="#444"/>
            <circle id="Ellipse_7-15" data-name="Ellipse 7" cx="2.816" cy="2.816" r="2.816" transform="translate(815.977 345.717)" fill="#444"/>
            <rect id="Rectangle_17-15" data-name="Rectangle 17" width="66.177" height="11.264" rx="3" transform="translate(828.649 286.58)" fill="#444"/>
            <rect id="Rectangle_23-15" data-name="Rectangle 23" width="66.177" height="11.264" rx="3" transform="translate(828.649 345.717)" fill="#444"/>
            <rect id="Rectangle_24-8" data-name="Rectangle 24" width="45.057" height="12.672" rx="3" transform="translate(828.649 365.43)" fill="#444"/>
            <rect id="Rectangle_19-15" data-name="Rectangle 19" width="66.177" height="12.672" rx="3" transform="translate(917.355 304.885)" fill="#144c4e"/>
            <rect id="Rectangle_25-8" data-name="Rectangle 25" width="66.177" height="12.672" rx="3" transform="translate(917.355 385.142)" fill="#144c4e"/>
            <rect id="Rectangle_22-15" data-name="Rectangle 22" width="43.649" height="12.672" rx="3" transform="translate(939.884 324.597)" fill="#144c4e"/>
            <ellipse id="Ellipse_4-16" data-name="Ellipse 4" cx="3.52" cy="2.816" rx="3.52" ry="2.816" transform="translate(990.573 430.199)" fill="#144c4e"/>
            <ellipse id="Ellipse_5-16" data-name="Ellipse 5" cx="2.816" cy="3.52" rx="2.816" ry="3.52" transform="translate(815.977 410.487)" fill="#444"/>
            <ellipse id="Ellipse_7-16" data-name="Ellipse 7" cx="2.816" cy="3.52" rx="2.816" ry="3.52" transform="translate(815.977 469.624)" fill="#444"/>
            <rect id="Rectangle_17-16" data-name="Rectangle 17" width="66.177" height="11.264" rx="3" transform="translate(828.649 410.487)" fill="#444"/>
            <rect id="Rectangle_23-16" data-name="Rectangle 23" width="66.177" height="12.672" rx="3" transform="translate(828.649 469.624)" fill="#444"/>
            <rect id="Rectangle_19-16" data-name="Rectangle 19" width="66.177" height="12.672" rx="3" transform="translate(917.355 430.199)" fill="#144c4e"/>
            <rect id="Rectangle_22-16" data-name="Rectangle 22" width="43.649" height="12.672" rx="3" transform="translate(939.884 448.503)" fill="#144c4e"/>
            <rect id="Rectangle_18-8" data-name="Rectangle 18" width="161.923" height="16.896" rx="3" transform="translate(815.977 504.825)" fill="#444"/>
            <path id="Polygon_1-8" data-name="Polygon 1" d="M2.6,2.215a1,1,0,0,1,1.846,0l2.02,4.848A1,1,0,0,1,5.54,8.448H1.5A1,1,0,0,1,.577,7.064Z" transform="translate(997.613 509.049) rotate(90)" fill="#444"/>
          </g>
          <g id="Group_29" data-name="Group 29" transform="matrix(0.966, 0.259, -0.259, 0.966, 404.212, -152.744)" opacity="0.26">
            <rect id="Rectangle_16-9" data-name="Rectangle 16" width="211.204" height="308.358" rx="16" transform="translate(800.489 233.075)" fill="#242424"/>
            <ellipse id="Ellipse_6-9" data-name="Ellipse 6" cx="6.836" cy="7.04" rx="6.836" ry="7.04" transform="translate(815.977 252.787)" fill="#0f0f0f"/>
            <rect id="Rectangle_20-9" data-name="Rectangle 20" width="47.873" height="4.224" rx="2" transform="translate(837.098 255.604)" fill="#0f0f0f"/>
            <rect id="Rectangle_21-9" data-name="Rectangle 21" width="18.304" height="4.224" rx="2" transform="translate(837.098 261.236)" fill="#444"/>
            <ellipse id="Ellipse_4-17" data-name="Ellipse 4" cx="3.52" cy="4.224" rx="3.52" ry="4.224" transform="translate(990.573 304.885)" fill="#144c4e"/>
            <ellipse id="Ellipse_8-9" data-name="Ellipse 8" cx="3.52" cy="4.224" rx="3.52" ry="4.224" transform="translate(990.573 385.142)" fill="#144c4e"/>
            <circle id="Ellipse_5-17" data-name="Ellipse 5" cx="2.816" cy="2.816" r="2.816" transform="translate(815.977 286.58)" fill="#444"/>
            <circle id="Ellipse_7-17" data-name="Ellipse 7" cx="2.816" cy="2.816" r="2.816" transform="translate(815.977 345.717)" fill="#444"/>
            <rect id="Rectangle_17-17" data-name="Rectangle 17" width="66.177" height="11.264" rx="3" transform="translate(828.649 286.58)" fill="#444"/>
            <rect id="Rectangle_23-17" data-name="Rectangle 23" width="66.177" height="11.264" rx="3" transform="translate(828.649 345.717)" fill="#444"/>
            <rect id="Rectangle_24-9" data-name="Rectangle 24" width="45.057" height="12.672" rx="3" transform="translate(828.649 365.43)" fill="#444"/>
            <rect id="Rectangle_19-17" data-name="Rectangle 19" width="66.177" height="12.672" rx="3" transform="translate(917.355 304.885)" fill="#144c4e"/>
            <rect id="Rectangle_25-9" data-name="Rectangle 25" width="66.177" height="12.672" rx="3" transform="translate(917.355 385.142)" fill="#144c4e"/>
            <rect id="Rectangle_22-17" data-name="Rectangle 22" width="43.649" height="12.672" rx="3" transform="translate(939.884 324.597)" fill="#144c4e"/>
            <ellipse id="Ellipse_4-18" data-name="Ellipse 4" cx="3.52" cy="2.816" rx="3.52" ry="2.816" transform="translate(990.573 430.199)" fill="#144c4e"/>
            <ellipse id="Ellipse_5-18" data-name="Ellipse 5" cx="2.816" cy="3.52" rx="2.816" ry="3.52" transform="translate(815.977 410.487)" fill="#444"/>
            <ellipse id="Ellipse_7-18" data-name="Ellipse 7" cx="2.816" cy="3.52" rx="2.816" ry="3.52" transform="translate(815.977 469.624)" fill="#444"/>
            <rect id="Rectangle_17-18" data-name="Rectangle 17" width="66.177" height="11.264" rx="3" transform="translate(828.649 410.487)" fill="#444"/>
            <rect id="Rectangle_23-18" data-name="Rectangle 23" width="66.177" height="12.672" rx="3" transform="translate(828.649 469.624)" fill="#444"/>
            <rect id="Rectangle_19-18" data-name="Rectangle 19" width="66.177" height="12.672" rx="3" transform="translate(917.355 430.199)" fill="#144c4e"/>
            <rect id="Rectangle_22-18" data-name="Rectangle 22" width="43.649" height="12.672" rx="3" transform="translate(939.884 448.503)" fill="#144c4e"/>
            <rect id="Rectangle_18-9" data-name="Rectangle 18" width="161.923" height="16.896" rx="3" transform="translate(815.977 504.825)" fill="#444"/>
            <path id="Polygon_1-9" data-name="Polygon 1" d="M2.6,2.215a1,1,0,0,1,1.846,0l2.02,4.848A1,1,0,0,1,5.54,8.448H1.5A1,1,0,0,1,.577,7.064Z" transform="translate(997.613 509.049) rotate(90)" fill="#444"/>
          </g>
          <g id="Group_30" data-name="Group 30" transform="matrix(0.966, 0.259, -0.259, 0.966, 498.681, -505.307)" opacity="0.26">
            <rect id="Rectangle_16-10" data-name="Rectangle 16" width="211.204" height="308.358" rx="16" transform="translate(800.489 233.075)" fill="#242424"/>
            <ellipse id="Ellipse_6-10" data-name="Ellipse 6" cx="6.836" cy="7.04" rx="6.836" ry="7.04" transform="translate(815.977 252.787)" fill="#0f0f0f"/>
            <rect id="Rectangle_20-10" data-name="Rectangle 20" width="47.873" height="4.224" rx="2" transform="translate(837.098 255.604)" fill="#0f0f0f"/>
            <rect id="Rectangle_21-10" data-name="Rectangle 21" width="18.304" height="4.224" rx="2" transform="translate(837.098 261.236)" fill="#444"/>
            <ellipse id="Ellipse_4-19" data-name="Ellipse 4" cx="3.52" cy="4.224" rx="3.52" ry="4.224" transform="translate(990.573 304.885)" fill="#144c4e"/>
            <ellipse id="Ellipse_8-10" data-name="Ellipse 8" cx="3.52" cy="4.224" rx="3.52" ry="4.224" transform="translate(990.573 385.142)" fill="#144c4e"/>
            <circle id="Ellipse_5-19" data-name="Ellipse 5" cx="2.816" cy="2.816" r="2.816" transform="translate(815.977 286.58)" fill="#444"/>
            <circle id="Ellipse_7-19" data-name="Ellipse 7" cx="2.816" cy="2.816" r="2.816" transform="translate(815.977 345.717)" fill="#444"/>
            <rect id="Rectangle_17-19" data-name="Rectangle 17" width="66.177" height="11.264" rx="3" transform="translate(828.649 286.58)" fill="#444"/>
            <rect id="Rectangle_23-19" data-name="Rectangle 23" width="66.177" height="11.264" rx="3" transform="translate(828.649 345.717)" fill="#444"/>
            <rect id="Rectangle_24-10" data-name="Rectangle 24" width="45.057" height="12.672" rx="3" transform="translate(828.649 365.43)" fill="#444"/>
            <rect id="Rectangle_19-19" data-name="Rectangle 19" width="66.177" height="12.672" rx="3" transform="translate(917.355 304.885)" fill="#144c4e"/>
            <rect id="Rectangle_25-10" data-name="Rectangle 25" width="66.177" height="12.672" rx="3" transform="translate(917.355 385.142)" fill="#144c4e"/>
            <rect id="Rectangle_22-19" data-name="Rectangle 22" width="43.649" height="12.672" rx="3" transform="translate(939.884 324.597)" fill="#144c4e"/>
            <ellipse id="Ellipse_4-20" data-name="Ellipse 4" cx="3.52" cy="2.816" rx="3.52" ry="2.816" transform="translate(990.573 430.199)" fill="#144c4e"/>
            <ellipse id="Ellipse_5-20" data-name="Ellipse 5" cx="2.816" cy="3.52" rx="2.816" ry="3.52" transform="translate(815.977 410.487)" fill="#444"/>
            <ellipse id="Ellipse_7-20" data-name="Ellipse 7" cx="2.816" cy="3.52" rx="2.816" ry="3.52" transform="translate(815.977 469.624)" fill="#444"/>
            <rect id="Rectangle_17-20" data-name="Rectangle 17" width="66.177" height="11.264" rx="3" transform="translate(828.649 410.487)" fill="#444"/>
            <rect id="Rectangle_23-20" data-name="Rectangle 23" width="66.177" height="12.672" rx="3" transform="translate(828.649 469.624)" fill="#444"/>
            <rect id="Rectangle_19-20" data-name="Rectangle 19" width="66.177" height="12.672" rx="3" transform="translate(917.355 430.199)" fill="#144c4e"/>
            <rect id="Rectangle_22-20" data-name="Rectangle 22" width="43.649" height="12.672" rx="3" transform="translate(939.884 448.503)" fill="#144c4e"/>
            <rect id="Rectangle_18-10" data-name="Rectangle 18" width="161.923" height="16.896" rx="3" transform="translate(815.977 504.825)" fill="#444"/>
            <path id="Polygon_1-10" data-name="Polygon 1" d="M2.6,2.215a1,1,0,0,1,1.846,0l2.02,4.848A1,1,0,0,1,5.54,8.448H1.5A1,1,0,0,1,.577,7.064Z" transform="translate(997.613 509.049) rotate(90)" fill="#444"/>
          </g>
          <g id="Group_31" data-name="Group 31" transform="matrix(0.966, 0.259, -0.259, 0.966, 309.743, 199.819)" opacity="0.26">
            <rect id="Rectangle_16-11" data-name="Rectangle 16" width="211.204" height="308.358" rx="16" transform="translate(800.489 233.075)" fill="#242424"/>
            <ellipse id="Ellipse_6-11" data-name="Ellipse 6" cx="6.836" cy="7.04" rx="6.836" ry="7.04" transform="translate(815.977 252.787)" fill="#0f0f0f"/>
            <rect id="Rectangle_20-11" data-name="Rectangle 20" width="47.873" height="4.224" rx="2" transform="translate(837.098 255.604)" fill="#0f0f0f"/>
            <rect id="Rectangle_21-11" data-name="Rectangle 21" width="18.304" height="4.224" rx="2" transform="translate(837.098 261.236)" fill="#444"/>
            <ellipse id="Ellipse_4-21" data-name="Ellipse 4" cx="3.52" cy="4.224" rx="3.52" ry="4.224" transform="translate(990.573 304.885)" fill="#144c4e"/>
            <ellipse id="Ellipse_8-11" data-name="Ellipse 8" cx="3.52" cy="4.224" rx="3.52" ry="4.224" transform="translate(990.573 385.142)" fill="#144c4e"/>
            <circle id="Ellipse_5-21" data-name="Ellipse 5" cx="2.816" cy="2.816" r="2.816" transform="translate(815.977 286.58)" fill="#444"/>
            <circle id="Ellipse_7-21" data-name="Ellipse 7" cx="2.816" cy="2.816" r="2.816" transform="translate(815.977 345.717)" fill="#444"/>
            <rect id="Rectangle_17-21" data-name="Rectangle 17" width="66.177" height="11.264" rx="3" transform="translate(828.649 286.58)" fill="#444"/>
            <rect id="Rectangle_23-21" data-name="Rectangle 23" width="66.177" height="11.264" rx="3" transform="translate(828.649 345.717)" fill="#444"/>
            <rect id="Rectangle_24-11" data-name="Rectangle 24" width="45.057" height="12.672" rx="3" transform="translate(828.649 365.43)" fill="#444"/>
            <rect id="Rectangle_19-21" data-name="Rectangle 19" width="66.177" height="12.672" rx="3" transform="translate(917.355 304.885)" fill="#144c4e"/>
            <rect id="Rectangle_25-11" data-name="Rectangle 25" width="66.177" height="12.672" rx="3" transform="translate(917.355 385.142)" fill="#144c4e"/>
            <rect id="Rectangle_22-21" data-name="Rectangle 22" width="43.649" height="12.672" rx="3" transform="translate(939.884 324.597)" fill="#144c4e"/>
            <ellipse id="Ellipse_4-22" data-name="Ellipse 4" cx="3.52" cy="2.816" rx="3.52" ry="2.816" transform="translate(990.573 430.199)" fill="#144c4e"/>
            <ellipse id="Ellipse_5-22" data-name="Ellipse 5" cx="2.816" cy="3.52" rx="2.816" ry="3.52" transform="translate(815.977 410.487)" fill="#444"/>
            <ellipse id="Ellipse_7-22" data-name="Ellipse 7" cx="2.816" cy="3.52" rx="2.816" ry="3.52" transform="translate(815.977 469.624)" fill="#444"/>
            <rect id="Rectangle_17-22" data-name="Rectangle 17" width="66.177" height="11.264" rx="3" transform="translate(828.649 410.487)" fill="#444"/>
            <rect id="Rectangle_23-22" data-name="Rectangle 23" width="66.177" height="12.672" rx="3" transform="translate(828.649 469.624)" fill="#444"/>
            <rect id="Rectangle_19-22" data-name="Rectangle 19" width="66.177" height="12.672" rx="3" transform="translate(917.355 430.199)" fill="#144c4e"/>
            <rect id="Rectangle_22-22" data-name="Rectangle 22" width="43.649" height="12.672" rx="3" transform="translate(939.884 448.503)" fill="#144c4e"/>
            <rect id="Rectangle_18-11" data-name="Rectangle 18" width="161.923" height="16.896" rx="3" transform="translate(815.977 504.825)" fill="#444"/>
            <path id="Polygon_1-11" data-name="Polygon 1" d="M2.6,2.215a1,1,0,0,1,1.846,0l2.02,4.848A1,1,0,0,1,5.54,8.448H1.5A1,1,0,0,1,.577,7.064Z" transform="translate(997.613 509.049) rotate(90)" fill="#444"/>
          </g>
        </g>
      </svg>
      : 
      <svg width="1264.529" height="1083.08" viewBox="0 0 1264.529 1083.08" style={svgStyle}>
        <g id="bg-light" transform="translate(-159.726 126.34)">
        <motion.g
            initial={{y: '-10px', opacity: 0}}
            animate={{y: '10px', opacity: 1}}
            transition={{
              y: {yoyo: Infinity, duration: 1},
              opacity: {delay: 0.5, duration: 0.5}
            }}
            style={{overflow: 'hidden'}}
          >
            <g id="Group_15" data-name="Group 15" transform="matrix(0.966, 0.259, -0.259, 0.966, 847.337, 241.48)">
              <rect id="Rectangle_16" data-name="Rectangle 16" width="211.204" height="308.358" rx="16" transform="translate(0 0)" fill="#f8f8f8"/>
              <ellipse id="Ellipse_6" data-name="Ellipse 6" cx="6.336" cy="7.04" rx="6.336" ry="7.04" transform="translate(15.488 19.712)" fill="#c4c4c4"/>
              <rect id="Rectangle_20" data-name="Rectangle 20" width="47.873" height="4.224" rx="2" transform="translate(36.609 22.528)" fill="#c4c4c4"/>
              <rect id="Rectangle_21" data-name="Rectangle 21" width="18.304" height="4.224" rx="2" transform="translate(36.609 28.161)" fill="#e2e2e2"/>
              <g id="Group_13" data-name="Group 13" transform="translate(15.488 53.505)">
                <ellipse id="Ellipse_4" data-name="Ellipse 4" cx="3.52" cy="4.224" rx="3.52" ry="4.224" transform="translate(174.595 18.304)" fill="#bbdadb"/>
                <ellipse id="Ellipse_8" data-name="Ellipse 8" cx="3.52" cy="4.224" rx="3.52" ry="4.224" transform="translate(174.595 98.562)" fill="#bbdadb"/>
                <circle id="Ellipse_5" data-name="Ellipse 5" cx="2.816" cy="2.816" r="2.816" transform="translate(0 0)" fill="#e2e2e2"/>
                <circle id="Ellipse_7" data-name="Ellipse 7" cx="2.816" cy="2.816" r="2.816" transform="translate(0 59.137)" fill="#e2e2e2"/>
                <rect id="Rectangle_17" data-name="Rectangle 17" width="66.177" height="11.264" rx="3" transform="translate(12.672 0)" fill="#e2e2e2"/>
                <rect id="Rectangle_23" data-name="Rectangle 23" width="66.177" height="11.264" rx="3" transform="translate(12.672 59.137)" fill="#e2e2e2"/>
                <rect id="Rectangle_24" data-name="Rectangle 24" width="45.057" height="12.672" rx="3" transform="translate(12.672 78.85)" fill="#e2e2e2"/>
                <rect id="Rectangle_19" data-name="Rectangle 19" width="66.177" height="12.672" rx="3" transform="translate(101.378 18.304)" fill="#bbdadb"/>
                <rect id="Rectangle_25" data-name="Rectangle 25" width="66.177" height="12.672" rx="3" transform="translate(101.378 98.562)" fill="#bbdadb"/>
                <rect id="Rectangle_22" data-name="Rectangle 22" width="43.649" height="12.672" rx="3" transform="translate(123.906 38.017)" fill="#bbdadb"/>
              </g>
              <g id="Group_14" data-name="Group 14" transform="translate(15.488 177.411)">
                <ellipse id="Ellipse_4-2" data-name="Ellipse 4" cx="3.52" cy="2.816" rx="3.52" ry="2.816" transform="translate(174.595 19.712)" fill="#bbdadb"/>
                <ellipse id="Ellipse_5-2" data-name="Ellipse 5" cx="2.816" cy="3.52" rx="2.816" ry="3.52" transform="translate(0 0)" fill="#e2e2e2"/>
                <ellipse id="Ellipse_7-2" data-name="Ellipse 7" cx="2.816" cy="3.52" rx="2.816" ry="3.52" transform="translate(0 59.137)" fill="#e2e2e2"/>
                <rect id="Rectangle_17-2" data-name="Rectangle 17" width="66.177" height="11.264" rx="3" transform="translate(12.672 0)" fill="#e2e2e2"/>
                <rect id="Rectangle_23-2" data-name="Rectangle 23" width="66.177" height="12.672" rx="3" transform="translate(12.672 59.137)" fill="#e2e2e2"/>
                <rect id="Rectangle_19-2" data-name="Rectangle 19" width="66.177" height="12.672" rx="3" transform="translate(101.378 19.712)" fill="#bbdadb"/>
                <rect id="Rectangle_22-2" data-name="Rectangle 22" width="43.649" height="12.672" rx="3" transform="translate(123.906 38.017)" fill="#bbdadb"/>
              </g>
              <rect id="Rectangle_18" data-name="Rectangle 18" width="161.923" height="16.896" rx="3" transform="translate(15.488 271.749)" fill="#e2e2e2"/>
              <path id="Polygon_1" data-name="Polygon 1" d="M2.6,2.215a1,1,0,0,1,1.846,0l2.02,4.848A1,1,0,0,1,5.54,8.448H1.5A1,1,0,0,1,.577,7.064Z" transform="translate(197.124 275.973) rotate(90)" fill="#e2e2e2"/>
            </g>
          </motion.g>
          <g id="Group_16" data-name="Group 16" transform="matrix(0.966, 0.259, -0.259, 0.966, 571.63, 225.913)" opacity="0.35">
            <rect id="Rectangle_16-2" data-name="Rectangle 16" width="211.204" height="308.358" rx="16" transform="translate(0 0)" fill="#f8f8f8"/>
            <circle id="Ellipse_6-2" data-name="Ellipse 6" cx="7.04" cy="7.04" r="7.04" transform="translate(14.08 19.712)" fill="#c4c4c4"/>
            <rect id="Rectangle_20-2" data-name="Rectangle 20" width="49.281" height="4.224" rx="2" transform="translate(35.201 23.936)" fill="#c4c4c4"/>
            <rect id="Rectangle_21-2" data-name="Rectangle 21" width="19.712" height="2.816" rx="1.408" transform="translate(35.201 29.569)" fill="#e2e2e2"/>
            <g id="Group_13-2" data-name="Group 13" transform="translate(14.08 54.913)">
              <ellipse id="Ellipse_4-3" data-name="Ellipse 4" cx="2.816" cy="3.52" rx="2.816" ry="3.52" transform="translate(176.003 18.305)" fill="#bbdadb"/>
              <ellipse id="Ellipse_8-2" data-name="Ellipse 8" cx="2.816" cy="3.52" rx="2.816" ry="3.52" transform="translate(176.003 98.562)" fill="#bbdadb"/>
              <ellipse id="Ellipse_5-3" data-name="Ellipse 5" cx="3.52" cy="2.816" rx="3.52" ry="2.816" transform="translate(0 0)" fill="#e2e2e2"/>
              <circle id="Ellipse_7-3" data-name="Ellipse 7" cx="3.52" cy="3.52" r="3.52" transform="translate(0 57.729)" fill="#e2e2e2"/>
              <rect id="Rectangle_17-3" data-name="Rectangle 17" width="66.177" height="9.856" rx="3" transform="translate(14.08 0)" fill="#e2e2e2"/>
              <rect id="Rectangle_23-3" data-name="Rectangle 23" width="66.177" height="12.672" rx="3" transform="translate(14.08 57.729)" fill="#e2e2e2"/>
              <rect id="Rectangle_24-2" data-name="Rectangle 24" width="45.057" height="12.672" rx="3" transform="translate(14.08 77.442)" fill="#e2e2e2"/>
              <rect id="Rectangle_19-3" data-name="Rectangle 19" width="66.177" height="11.264" rx="3" transform="translate(102.786 18.305)" fill="#bbdadb"/>
              <rect id="Rectangle_25-2" data-name="Rectangle 25" width="66.177" height="12.672" rx="3" transform="translate(102.786 98.562)" fill="#bbdadb"/>
              <rect id="Rectangle_22-3" data-name="Rectangle 22" width="43.649" height="12.672" rx="3" transform="translate(125.314 38.017)" fill="#bbdadb"/>
            </g>
            <g id="Group_14-2" data-name="Group 14" transform="translate(14.08 177.411)">
              <circle id="Ellipse_4-4" data-name="Ellipse 4" cx="2.816" cy="2.816" r="2.816" transform="translate(176.003 21.12)" fill="#bbdadb"/>
              <ellipse id="Ellipse_5-4" data-name="Ellipse 5" cx="3.52" cy="4.224" rx="3.52" ry="4.224" transform="translate(0 0)" fill="#e2e2e2"/>
              <ellipse id="Ellipse_7-4" data-name="Ellipse 7" cx="3.52" cy="2.816" rx="3.52" ry="2.816" transform="translate(0 60.545)" fill="#e2e2e2"/>
              <rect id="Rectangle_17-4" data-name="Rectangle 17" width="66.177" height="12.672" rx="3" transform="translate(14.08 0)" fill="#e2e2e2"/>
              <rect id="Rectangle_23-4" data-name="Rectangle 23" width="66.177" height="12.672" rx="3" transform="translate(14.08 60.545)" fill="#e2e2e2"/>
              <rect id="Rectangle_19-4" data-name="Rectangle 19" width="66.177" height="11.264" rx="3" transform="translate(102.786 21.12)" fill="#bbdadb"/>
              <rect id="Rectangle_22-4" data-name="Rectangle 22" width="43.649" height="11.264" rx="3" transform="translate(125.314 39.425)" fill="#bbdadb"/>
            </g>
            <rect id="Rectangle_18-2" data-name="Rectangle 18" width="163.331" height="16.896" rx="3" transform="translate(14.08 271.749)" fill="#e2e2e2"/>
            <path id="Polygon_1-2" data-name="Polygon 1" d="M3.33,1.789a1,1,0,0,1,1.789,0L7.725,7A1,1,0,0,1,6.83,8.448H1.618A1,1,0,0,1,.724,7Z" transform="translate(195.716 275.973) rotate(90)" fill="#e2e2e2"/>
          </g>
          <g id="Group_25" data-name="Group 25" transform="matrix(0.966, 0.259, -0.259, 0.966, 333.921, 63.096)" opacity="0.35">
            <rect id="Rectangle_16-3" data-name="Rectangle 16" width="211.204" height="308.358" rx="16" transform="translate(0 0)" fill="#f8f8f8"/>
            <circle id="Ellipse_6-3" data-name="Ellipse 6" cx="7.04" cy="7.04" r="7.04" transform="translate(15.488 19.712)" fill="#c4c4c4"/>
            <rect id="Rectangle_20-3" data-name="Rectangle 20" width="47.873" height="4.224" rx="2" transform="translate(36.609 23.936)" fill="#c4c4c4"/>
            <rect id="Rectangle_21-3" data-name="Rectangle 21" width="18.304" height="2.816" rx="1.408" transform="translate(36.609 29.569)" fill="#e2e2e2"/>
            <g id="Group_13-3" data-name="Group 13" transform="translate(15.488 54.913)">
              <ellipse id="Ellipse_4-5" data-name="Ellipse 4" cx="2.816" cy="3.52" rx="2.816" ry="3.52" transform="translate(176.004 18.304)" fill="#bbdadb"/>
              <ellipse id="Ellipse_8-3" data-name="Ellipse 8" cx="2.816" cy="3.52" rx="2.816" ry="3.52" transform="translate(176.004 98.562)" fill="#bbdadb"/>
              <circle id="Ellipse_5-5" data-name="Ellipse 5" cx="2.816" cy="2.816" r="2.816" transform="translate(0 0)" fill="#e2e2e2"/>
              <ellipse id="Ellipse_7-5" data-name="Ellipse 7" cx="2.816" cy="3.52" rx="2.816" ry="3.52" transform="translate(0 57.729)" fill="#e2e2e2"/>
              <rect id="Rectangle_17-5" data-name="Rectangle 17" width="64.769" height="9.856" rx="3" transform="translate(14.08 0)" fill="#e2e2e2"/>
              <rect id="Rectangle_23-5" data-name="Rectangle 23" width="64.769" height="12.672" rx="3" transform="translate(14.08 57.729)" fill="#e2e2e2"/>
              <rect id="Rectangle_24-3" data-name="Rectangle 24" width="45.057" height="11.264" rx="3" transform="translate(14.08 78.85)" fill="#e2e2e2"/>
              <rect id="Rectangle_19-5" data-name="Rectangle 19" width="64.769" height="12.672" rx="3" transform="translate(102.786 18.304)" fill="#bbdadb"/>
              <rect id="Rectangle_25-3" data-name="Rectangle 25" width="64.769" height="12.672" rx="3" transform="translate(102.786 98.562)" fill="#bbdadb"/>
              <rect id="Rectangle_22-5" data-name="Rectangle 22" width="43.649" height="12.672" rx="3" transform="translate(123.906 38.017)" fill="#bbdadb"/>
            </g>
            <g id="Group_14-3" data-name="Group 14" transform="translate(15.488 177.411)">
              <circle id="Ellipse_4-6" data-name="Ellipse 4" cx="2.816" cy="2.816" r="2.816" transform="translate(176.004 21.12)" fill="#bbdadb"/>
              <ellipse id="Ellipse_5-6" data-name="Ellipse 5" cx="2.816" cy="4.224" rx="2.816" ry="4.224" transform="translate(0 0)" fill="#e2e2e2"/>
              <circle id="Ellipse_7-6" data-name="Ellipse 7" cx="2.816" cy="2.816" r="2.816" transform="translate(0 60.545)" fill="#e2e2e2"/>
              <rect id="Rectangle_17-6" data-name="Rectangle 17" width="64.769" height="12.672" rx="3" transform="translate(14.08 0)" fill="#e2e2e2"/>
              <rect id="Rectangle_23-6" data-name="Rectangle 23" width="64.769" height="12.672" rx="3" transform="translate(14.08 60.545)" fill="#e2e2e2"/>
              <rect id="Rectangle_19-6" data-name="Rectangle 19" width="64.769" height="11.264" rx="3" transform="translate(102.786 21.12)" fill="#bbdadb"/>
              <rect id="Rectangle_22-6" data-name="Rectangle 22" width="43.649" height="11.264" rx="3" transform="translate(123.906 39.425)" fill="#bbdadb"/>
            </g>
            <rect id="Rectangle_18-3" data-name="Rectangle 18" width="161.923" height="16.896" rx="3" transform="translate(15.488 271.749)" fill="#e2e2e2"/>
            <path id="Polygon_1-3" data-name="Polygon 1" d="M3.33,1.789a1,1,0,0,1,1.789,0L7.725,7A1,1,0,0,1,6.83,8.448H1.618A1,1,0,0,1,.724,7Z" transform="translate(197.124 275.973) rotate(90)" fill="#e2e2e2"/>
          </g>
          <g id="Group_21" data-name="Group 21" transform="matrix(0.966, 0.259, -0.259, 0.966, 239.171, 416.709)" opacity="0.35">
            <rect id="Rectangle_16-4" data-name="Rectangle 16" width="211.204" height="306.95" rx="16" transform="translate(0 0)" fill="#f8f8f8"/>
            <circle id="Ellipse_6-4" data-name="Ellipse 6" cx="7.04" cy="7.04" r="7.04" transform="translate(15.488 19.712)" fill="#c4c4c4"/>
            <rect id="Rectangle_20-4" data-name="Rectangle 20" width="47.873" height="5.632" rx="2" transform="translate(36.609 21.12)" fill="#c4c4c4"/>
            <rect id="Rectangle_21-4" data-name="Rectangle 21" width="18.304" height="2.816" rx="1.408" transform="translate(36.609 29.569)" fill="#e2e2e2"/>
            <g id="Group_13-4" data-name="Group 13" transform="translate(15.488 52.097)">
              <circle id="Ellipse_4-7" data-name="Ellipse 4" cx="2.816" cy="2.816" r="2.816" transform="translate(176.004 21.12)" fill="#bbdadb"/>
              <ellipse id="Ellipse_8-4" data-name="Ellipse 8" cx="2.816" cy="3.52" rx="2.816" ry="3.52" transform="translate(176.004 99.97)" fill="#bbdadb"/>
              <ellipse id="Ellipse_5-7" data-name="Ellipse 5" cx="2.816" cy="3.52" rx="2.816" ry="3.52" transform="translate(0 0)" fill="#e2e2e2"/>
              <ellipse id="Ellipse_7-7" data-name="Ellipse 7" cx="2.816" cy="3.52" rx="2.816" ry="3.52" transform="translate(0 59.137)" fill="#e2e2e2"/>
              <rect id="Rectangle_17-7" data-name="Rectangle 17" width="64.769" height="11.264" rx="3" transform="translate(14.08 0)" fill="#e2e2e2"/>
              <rect id="Rectangle_23-7" data-name="Rectangle 23" width="64.769" height="12.672" rx="3" transform="translate(14.08 59.137)" fill="#e2e2e2"/>
              <rect id="Rectangle_24-4" data-name="Rectangle 24" width="45.057" height="14.08" rx="3" transform="translate(14.08 78.85)" fill="#e2e2e2"/>
              <rect id="Rectangle_19-7" data-name="Rectangle 19" width="64.769" height="11.264" rx="3" transform="translate(102.786 21.12)" fill="#bbdadb"/>
              <rect id="Rectangle_25-4" data-name="Rectangle 25" width="64.769" height="11.264" rx="3" transform="translate(102.786 99.97)" fill="#bbdadb"/>
              <rect id="Rectangle_22-7" data-name="Rectangle 22" width="43.649" height="11.264" rx="3" transform="translate(123.906 40.833)" fill="#bbdadb"/>
            </g>
            <g id="Group_14-4" data-name="Group 14" transform="translate(15.488 176.003)">
              <ellipse id="Ellipse_4-8" data-name="Ellipse 4" cx="2.816" cy="4.224" rx="2.816" ry="4.224" transform="translate(176.004 19.712)" fill="#bbdadb"/>
              <ellipse id="Ellipse_5-8" data-name="Ellipse 5" cx="2.816" cy="4.224" rx="2.816" ry="4.224" transform="translate(0 0)" fill="#e2e2e2"/>
              <circle id="Ellipse_7-8" data-name="Ellipse 7" cx="2.816" cy="2.816" r="2.816" transform="translate(0 60.545)" fill="#e2e2e2"/>
              <rect id="Rectangle_17-8" data-name="Rectangle 17" width="64.769" height="12.672" rx="3" transform="translate(14.08 0)" fill="#e2e2e2"/>
              <rect id="Rectangle_23-8" data-name="Rectangle 23" width="64.769" height="12.672" rx="3" transform="translate(14.08 60.545)" fill="#e2e2e2"/>
              <rect id="Rectangle_19-8" data-name="Rectangle 19" width="64.769" height="12.672" rx="3" transform="translate(102.786 19.712)" fill="#bbdadb"/>
              <rect id="Rectangle_22-8" data-name="Rectangle 22" width="43.649" height="11.264" rx="3" transform="translate(123.906 40.833)" fill="#bbdadb"/>
            </g>
            <rect id="Rectangle_18-4" data-name="Rectangle 18" width="161.923" height="16.896" rx="3" transform="translate(15.488 270.341)" fill="#e2e2e2"/>
            <path id="Polygon_1-4" data-name="Polygon 1" d="M3.33,1.789a1,1,0,0,1,1.789,0L7.725,7A1,1,0,0,1,6.83,8.448H1.618A1,1,0,0,1,.724,7Z" transform="translate(197.124 274.565) rotate(90)" fill="#e2e2e2"/>
          </g>
          <g id="Group_17" data-name="Group 17" transform="matrix(0.966, 0.259, -0.259, 0.966, 1125.862, 251.972)" opacity="0.35">
            <rect id="Rectangle_16-5" data-name="Rectangle 16" width="211.204" height="308.358" rx="16" transform="translate(0 0)" fill="#f8f8f8"/>
            <circle id="Ellipse_6-5" data-name="Ellipse 6" cx="7.04" cy="7.04" r="7.04" transform="translate(14.08 19.712)" fill="#c4c4c4"/>
            <rect id="Rectangle_20-5" data-name="Rectangle 20" width="49.281" height="4.224" rx="2" transform="translate(35.201 22.528)" fill="#c4c4c4"/>
            <rect id="Rectangle_21-5" data-name="Rectangle 21" width="19.712" height="2.816" rx="1.408" transform="translate(35.201 29.569)" fill="#e2e2e2"/>
            <g id="Group_13-5" data-name="Group 13" transform="translate(14.08 53.505)">
              <ellipse id="Ellipse_4-9" data-name="Ellipse 4" cx="2.816" cy="4.224" rx="2.816" ry="4.224" transform="translate(176.003 18.304)" fill="#bbdadb"/>
              <ellipse id="Ellipse_8-5" data-name="Ellipse 8" cx="2.816" cy="4.224" rx="2.816" ry="4.224" transform="translate(176.003 98.562)" fill="#bbdadb"/>
              <ellipse id="Ellipse_5-9" data-name="Ellipse 5" cx="2.816" cy="3.52" rx="2.816" ry="3.52" transform="translate(0 0)" fill="#e2e2e2"/>
              <circle id="Ellipse_7-9" data-name="Ellipse 7" cx="2.816" cy="2.816" r="2.816" transform="translate(0 59.137)" fill="#e2e2e2"/>
              <rect id="Rectangle_17-9" data-name="Rectangle 17" width="64.769" height="11.264" rx="3" transform="translate(14.08 0)" fill="#e2e2e2"/>
              <rect id="Rectangle_23-9" data-name="Rectangle 23" width="64.769" height="12.672" rx="3" transform="translate(14.08 59.137)" fill="#e2e2e2"/>
              <rect id="Rectangle_24-5" data-name="Rectangle 24" width="43.649" height="12.672" rx="3" transform="translate(14.08 78.849)" fill="#e2e2e2"/>
              <rect id="Rectangle_19-9" data-name="Rectangle 19" width="64.769" height="12.672" rx="3" transform="translate(102.786 18.304)" fill="#bbdadb"/>
              <rect id="Rectangle_25-5" data-name="Rectangle 25" width="64.769" height="12.672" rx="3" transform="translate(102.786 98.562)" fill="#bbdadb"/>
              <rect id="Rectangle_22-9" data-name="Rectangle 22" width="42.241" height="11.264" rx="3" transform="translate(125.314 39.425)" fill="#bbdadb"/>
            </g>
            <g id="Group_14-5" data-name="Group 14" transform="translate(14.08 177.411)">
              <circle id="Ellipse_4-10" data-name="Ellipse 4" cx="2.816" cy="2.816" r="2.816" transform="translate(176.003 19.712)" fill="#bbdadb"/>
              <ellipse id="Ellipse_5-10" data-name="Ellipse 5" cx="2.816" cy="3.52" rx="2.816" ry="3.52" transform="translate(0 0)" fill="#e2e2e2"/>
              <circle id="Ellipse_7-10" data-name="Ellipse 7" cx="2.816" cy="2.816" r="2.816" transform="translate(0 60.545)" fill="#e2e2e2"/>
              <rect id="Rectangle_17-10" data-name="Rectangle 17" width="64.769" height="12.672" rx="3" transform="translate(14.08 0)" fill="#e2e2e2"/>
              <rect id="Rectangle_23-10" data-name="Rectangle 23" width="64.769" height="11.264" rx="3" transform="translate(14.08 60.545)" fill="#e2e2e2"/>
              <rect id="Rectangle_19-10" data-name="Rectangle 19" width="64.769" height="12.672" rx="3" transform="translate(102.786 19.712)" fill="#bbdadb"/>
              <rect id="Rectangle_22-10" data-name="Rectangle 22" width="42.241" height="12.672" rx="3" transform="translate(125.314 38.017)" fill="#bbdadb"/>
            </g>
            <rect id="Rectangle_18-5" data-name="Rectangle 18" width="163.331" height="16.896" rx="3" transform="translate(14.08 271.749)" fill="#e2e2e2"/>
            <path id="Polygon_1-5" data-name="Polygon 1" d="M3.3,2.145a1,1,0,0,1,1.838,0L7.851,8.462a1,1,0,0,1-.919,1.394H1.517A1,1,0,0,1,.6,8.462Z" transform="translate(195.716 275.973) rotate(90)" fill="#e2e2e2"/>
          </g>
          <g id="Group_22" data-name="Group 22" transform="matrix(0.966, 0.259, -0.259, 0.966, 1031.111, 605.585)" opacity="0.35">
            <rect id="Rectangle_16-6" data-name="Rectangle 16" width="211.204" height="306.95" rx="16" transform="translate(0 0)" fill="#f8f8f8"/>
            <circle id="Ellipse_6-6" data-name="Ellipse 6" cx="7.04" cy="7.04" r="7.04" transform="translate(14.08 19.712)" fill="#c4c4c4"/>
            <rect id="Rectangle_20-6" data-name="Rectangle 20" width="49.281" height="4.224" rx="2" transform="translate(35.201 21.12)" fill="#c4c4c4"/>
            <rect id="Rectangle_21-6" data-name="Rectangle 21" width="19.712" height="4.224" rx="2" transform="translate(35.201 28.161)" fill="#e2e2e2"/>
            <g id="Group_13-6" data-name="Group 13" transform="translate(14.08 52.097)">
              <ellipse id="Ellipse_4-11" data-name="Ellipse 4" cx="2.816" cy="3.52" rx="2.816" ry="3.52" transform="translate(176.003 19.712)" fill="#bbdadb"/>
              <ellipse id="Ellipse_8-6" data-name="Ellipse 8" cx="2.816" cy="4.224" rx="2.816" ry="4.224" transform="translate(176.003 98.562)" fill="#bbdadb"/>
              <circle id="Ellipse_5-11" data-name="Ellipse 5" cx="2.816" cy="2.816" r="2.816" transform="translate(0 0)" fill="#e2e2e2"/>
              <ellipse id="Ellipse_7-11" data-name="Ellipse 7" cx="2.816" cy="3.52" rx="2.816" ry="3.52" transform="translate(0 59.137)" fill="#e2e2e2"/>
              <rect id="Rectangle_17-11" data-name="Rectangle 17" width="64.769" height="11.264" rx="3" transform="translate(14.08 0)" fill="#e2e2e2"/>
              <rect id="Rectangle_23-11" data-name="Rectangle 23" width="64.769" height="11.264" rx="3" transform="translate(14.08 59.137)" fill="#e2e2e2"/>
              <rect id="Rectangle_24-6" data-name="Rectangle 24" width="43.649" height="14.08" rx="3" transform="translate(14.08 78.85)" fill="#e2e2e2"/>
              <rect id="Rectangle_19-11" data-name="Rectangle 19" width="64.769" height="12.672" rx="3" transform="translate(102.786 19.712)" fill="#bbdadb"/>
              <rect id="Rectangle_25-6" data-name="Rectangle 25" width="64.769" height="12.672" rx="3" transform="translate(102.786 98.562)" fill="#bbdadb"/>
              <rect id="Rectangle_22-11" data-name="Rectangle 22" width="42.241" height="11.264" rx="3" transform="translate(125.314 39.425)" fill="#bbdadb"/>
            </g>
            <g id="Group_14-6" data-name="Group 14" transform="translate(14.08 176.003)">
              <ellipse id="Ellipse_4-12" data-name="Ellipse 4" cx="2.816" cy="3.52" rx="2.816" ry="3.52" transform="translate(176.003 19.712)" fill="#bbdadb"/>
              <ellipse id="Ellipse_5-12" data-name="Ellipse 5" cx="2.816" cy="3.52" rx="2.816" ry="3.52" transform="translate(0 0)" fill="#e2e2e2"/>
              <ellipse id="Ellipse_7-12" data-name="Ellipse 7" cx="2.816" cy="3.52" rx="2.816" ry="3.52" transform="translate(0 59.137)" fill="#e2e2e2"/>
              <rect id="Rectangle_17-12" data-name="Rectangle 17" width="64.769" height="11.264" rx="3" transform="translate(14.08 0)" fill="#e2e2e2"/>
              <rect id="Rectangle_23-12" data-name="Rectangle 23" width="64.769" height="12.672" rx="3" transform="translate(14.08 59.137)" fill="#e2e2e2"/>
              <rect id="Rectangle_19-12" data-name="Rectangle 19" width="64.769" height="12.672" rx="3" transform="translate(102.786 19.712)" fill="#bbdadb"/>
              <rect id="Rectangle_22-12" data-name="Rectangle 22" width="42.241" height="12.672" rx="3" transform="translate(125.314 39.425)" fill="#bbdadb"/>
            </g>
            <rect id="Rectangle_18-6" data-name="Rectangle 18" width="163.331" height="18.304" rx="3" transform="translate(14.08 268.933)" fill="#e2e2e2"/>
            <path id="Polygon_1-6" data-name="Polygon 1" d="M2.578,2.637a1,1,0,0,1,1.883,0l2.1,5.883a1,1,0,0,1-.942,1.336h-4.2A1,1,0,0,1,.477,8.52Z" transform="translate(195.716 274.565) rotate(90)" fill="#e2e2e2"/>
          </g>
          <g id="Group_18" data-name="Group 18" transform="matrix(0.966, 0.259, -0.259, 0.966, 1220.247, -100.281)" opacity="0.35">
            <rect id="Rectangle_16-7" data-name="Rectangle 16" width="211.204" height="306.95" rx="16" transform="translate(0 0)" fill="#f8f8f8"/>
            <circle id="Ellipse_6-7" data-name="Ellipse 6" cx="7.04" cy="7.04" r="7.04" transform="translate(14.08 19.712)" fill="#c4c4c4"/>
            <rect id="Rectangle_20-7" data-name="Rectangle 20" width="49.281" height="5.632" rx="2" transform="translate(35.201 21.12)" fill="#c4c4c4"/>
            <rect id="Rectangle_21-7" data-name="Rectangle 21" width="19.712" height="2.816" rx="1.408" transform="translate(35.201 29.569)" fill="#e2e2e2"/>
            <g id="Group_13-7" data-name="Group 13" transform="translate(14.08 52.097)">
              <circle id="Ellipse_4-13" data-name="Ellipse 4" cx="2.816" cy="2.816" r="2.816" transform="translate(176.003 21.121)" fill="#bbdadb"/>
              <ellipse id="Ellipse_8-7" data-name="Ellipse 8" cx="2.816" cy="4.224" rx="2.816" ry="4.224" transform="translate(176.003 98.562)" fill="#bbdadb"/>
              <ellipse id="Ellipse_5-13" data-name="Ellipse 5" cx="2.816" cy="4.224" rx="2.816" ry="4.224" transform="translate(0 0)" fill="#e2e2e2"/>
              <ellipse id="Ellipse_7-13" data-name="Ellipse 7" cx="2.816" cy="3.52" rx="2.816" ry="3.52" transform="translate(0 59.137)" fill="#e2e2e2"/>
              <rect id="Rectangle_17-13" data-name="Rectangle 17" width="64.769" height="12.672" rx="3" transform="translate(14.08 0)" fill="#e2e2e2"/>
              <rect id="Rectangle_23-13" data-name="Rectangle 23" width="64.769" height="14.08" rx="3" transform="translate(14.08 59.137)" fill="#e2e2e2"/>
              <rect id="Rectangle_24-7" data-name="Rectangle 24" width="43.649" height="12.672" rx="3" transform="translate(14.08 80.257)" fill="#e2e2e2"/>
              <rect id="Rectangle_19-13" data-name="Rectangle 19" width="64.769" height="11.264" rx="3" transform="translate(102.786 21.121)" fill="#bbdadb"/>
              <rect id="Rectangle_25-7" data-name="Rectangle 25" width="64.769" height="12.672" rx="3" transform="translate(102.786 98.562)" fill="#bbdadb"/>
              <rect id="Rectangle_22-13" data-name="Rectangle 22" width="42.241" height="9.856" rx="3" transform="translate(125.314 40.833)" fill="#bbdadb"/>
            </g>
            <g id="Group_14-7" data-name="Group 14" transform="translate(14.08 176.003)">
              <ellipse id="Ellipse_4-14" data-name="Ellipse 4" cx="2.816" cy="3.52" rx="2.816" ry="3.52" transform="translate(176.003 21.12)" fill="#bbdadb"/>
              <ellipse id="Ellipse_5-14" data-name="Ellipse 5" cx="2.816" cy="3.52" rx="2.816" ry="3.52" transform="translate(0 0)" fill="#e2e2e2"/>
              <ellipse id="Ellipse_7-14" data-name="Ellipse 7" cx="2.816" cy="3.52" rx="2.816" ry="3.52" transform="translate(0 60.545)" fill="#e2e2e2"/>
              <rect id="Rectangle_17-14" data-name="Rectangle 17" width="64.769" height="12.672" rx="3" transform="translate(14.08 0)" fill="#e2e2e2"/>
              <rect id="Rectangle_23-14" data-name="Rectangle 23" width="64.769" height="12.672" rx="3" transform="translate(14.08 60.545)" fill="#e2e2e2"/>
              <rect id="Rectangle_19-14" data-name="Rectangle 19" width="64.769" height="12.672" rx="3" transform="translate(102.786 21.12)" fill="#bbdadb"/>
              <rect id="Rectangle_22-14" data-name="Rectangle 22" width="42.241" height="11.264" rx="3" transform="translate(125.314 40.833)" fill="#bbdadb"/>
            </g>
            <rect id="Rectangle_18-7" data-name="Rectangle 18" width="163.331" height="16.896" rx="3" transform="translate(14.08 270.341)" fill="#e2e2e2"/>
            <path id="Polygon_1-7" data-name="Polygon 1" d="M3.3,2.145a1,1,0,0,1,1.838,0L7.851,8.462a1,1,0,0,1-.919,1.394H1.517A1,1,0,0,1,.6,8.462Z" transform="translate(195.716 274.565) rotate(90)" fill="#e2e2e2"/>
          </g>
          <g id="Group_23" data-name="Group 23" transform="matrix(0.966, 0.259, -0.259, 0.966, 752.951, 593.734)" opacity="0.35">
            <rect id="Rectangle_16-8" data-name="Rectangle 16" width="211.204" height="308.358" rx="16" transform="translate(0 0)" fill="#f8f8f8"/>
            <ellipse id="Ellipse_6-8" data-name="Ellipse 6" cx="6.336" cy="7.04" rx="6.336" ry="7.04" transform="translate(15.488 21.12)" fill="#c4c4c4"/>
            <rect id="Rectangle_20-8" data-name="Rectangle 20" width="47.873" height="4.224" rx="2" transform="translate(36.609 22.528)" fill="#c4c4c4"/>
            <rect id="Rectangle_21-8" data-name="Rectangle 21" width="18.304" height="4.224" rx="2" transform="translate(36.609 29.569)" fill="#e2e2e2"/>
            <g id="Group_13-8" data-name="Group 13" transform="translate(15.488 53.505)">
              <ellipse id="Ellipse_4-15" data-name="Ellipse 4" cx="3.52" cy="2.816" rx="3.52" ry="2.816" transform="translate(174.595 19.712)" fill="#bbdadb"/>
              <circle id="Ellipse_8-8" data-name="Ellipse 8" cx="3.52" cy="3.52" r="3.52" transform="translate(174.595 98.562)" fill="#bbdadb"/>
              <circle id="Ellipse_5-15" data-name="Ellipse 5" cx="2.816" cy="2.816" r="2.816" transform="translate(0 0)" fill="#e2e2e2"/>
              <ellipse id="Ellipse_7-15" data-name="Ellipse 7" cx="2.816" cy="4.224" rx="2.816" ry="4.224" transform="translate(0 57.729)" fill="#e2e2e2"/>
              <rect id="Rectangle_17-15" data-name="Rectangle 17" width="66.177" height="9.856" rx="3" transform="translate(12.672 0)" fill="#e2e2e2"/>
              <rect id="Rectangle_23-15" data-name="Rectangle 23" width="66.177" height="12.672" rx="3" transform="translate(12.672 57.729)" fill="#e2e2e2"/>
              <rect id="Rectangle_24-8" data-name="Rectangle 24" width="45.057" height="14.08" rx="3" transform="translate(12.672 78.849)" fill="#e2e2e2"/>
              <rect id="Rectangle_19-15" data-name="Rectangle 19" width="66.177" height="12.672" rx="3" transform="translate(101.378 19.712)" fill="#bbdadb"/>
              <rect id="Rectangle_25-8" data-name="Rectangle 25" width="66.177" height="12.672" rx="3" transform="translate(101.378 98.562)" fill="#bbdadb"/>
              <rect id="Rectangle_22-15" data-name="Rectangle 22" width="43.649" height="11.264" rx="3" transform="translate(123.906 39.425)" fill="#bbdadb"/>
            </g>
            <g id="Group_14-8" data-name="Group 14" transform="translate(15.488 176.004)">
              <circle id="Ellipse_4-16" data-name="Ellipse 4" cx="3.52" cy="3.52" r="3.52" transform="translate(174.595 21.12)" fill="#bbdadb"/>
              <ellipse id="Ellipse_5-16" data-name="Ellipse 5" cx="2.816" cy="4.224" rx="2.816" ry="4.224" transform="translate(0 0)" fill="#e2e2e2"/>
              <ellipse id="Ellipse_7-16" data-name="Ellipse 7" cx="2.816" cy="3.52" rx="2.816" ry="3.52" transform="translate(0 60.545)" fill="#e2e2e2"/>
              <rect id="Rectangle_17-16" data-name="Rectangle 17" width="66.177" height="12.672" rx="3" transform="translate(12.672 0)" fill="#e2e2e2"/>
              <rect id="Rectangle_23-16" data-name="Rectangle 23" width="66.177" height="12.672" rx="3" transform="translate(12.672 60.545)" fill="#e2e2e2"/>
              <rect id="Rectangle_19-16" data-name="Rectangle 19" width="66.177" height="11.264" rx="3" transform="translate(101.378 21.12)" fill="#bbdadb"/>
              <rect id="Rectangle_22-16" data-name="Rectangle 22" width="43.649" height="12.672" rx="3" transform="translate(123.906 40.833)" fill="#bbdadb"/>
            </g>
            <rect id="Rectangle_18-8" data-name="Rectangle 18" width="161.923" height="16.896" rx="3" transform="translate(15.488 270.341)" fill="#e2e2e2"/>
            <path id="Polygon_1-8" data-name="Polygon 1" d="M2.6,2.215a1,1,0,0,1,1.846,0l2.02,4.848A1,1,0,0,1,5.54,8.448H1.5A1,1,0,0,1,.577,7.064Z" transform="translate(197.124 275.973) rotate(90)" fill="#e2e2e2"/>
          </g>
          <g id="Group_26" data-name="Group 26" transform="matrix(0.966, 0.259, -0.259, 0.966, 941.723, -110.772)" opacity="0.35">
            <rect id="Rectangle_16-9" data-name="Rectangle 16" width="211.204" height="306.95" rx="16" transform="translate(0 0)" fill="#f8f8f8"/>
            <ellipse id="Ellipse_6-9" data-name="Ellipse 6" cx="6.336" cy="7.04" rx="6.336" ry="7.04" transform="translate(15.488 19.712)" fill="#c4c4c4"/>
            <rect id="Rectangle_20-9" data-name="Rectangle 20" width="47.873" height="4.224" rx="2" transform="translate(36.609 21.12)" fill="#c4c4c4"/>
            <rect id="Rectangle_21-9" data-name="Rectangle 21" width="18.304" height="2.816" rx="1.408" transform="translate(36.609 29.569)" fill="#e2e2e2"/>
            <g id="Group_13-9" data-name="Group 13" transform="translate(15.488 52.097)">
              <circle id="Ellipse_4-17" data-name="Ellipse 4" cx="3.52" cy="3.52" r="3.52" transform="translate(174.595 19.712)" fill="#bbdadb"/>
              <ellipse id="Ellipse_8-9" data-name="Ellipse 8" cx="3.52" cy="4.224" rx="3.52" ry="4.224" transform="translate(174.595 98.562)" fill="#bbdadb"/>
              <ellipse id="Ellipse_5-17" data-name="Ellipse 5" cx="2.816" cy="3.52" rx="2.816" ry="3.52" transform="translate(0 0)" fill="#e2e2e2"/>
              <ellipse id="Ellipse_7-17" data-name="Ellipse 7" cx="2.816" cy="3.52" rx="2.816" ry="3.52" transform="translate(0 59.137)" fill="#e2e2e2"/>
              <rect id="Rectangle_17-17" data-name="Rectangle 17" width="66.177" height="11.264" rx="3" transform="translate(12.672 0)" fill="#e2e2e2"/>
              <rect id="Rectangle_23-17" data-name="Rectangle 23" width="66.177" height="12.672" rx="3" transform="translate(12.672 59.137)" fill="#e2e2e2"/>
              <rect id="Rectangle_24-9" data-name="Rectangle 24" width="45.057" height="14.08" rx="3" transform="translate(12.672 78.85)" fill="#e2e2e2"/>
              <rect id="Rectangle_19-17" data-name="Rectangle 19" width="66.177" height="12.672" rx="3" transform="translate(101.378 19.712)" fill="#bbdadb"/>
              <rect id="Rectangle_25-9" data-name="Rectangle 25" width="66.177" height="12.672" rx="3" transform="translate(101.378 98.562)" fill="#bbdadb"/>
              <rect id="Rectangle_22-17" data-name="Rectangle 22" width="43.649" height="9.856" rx="3" transform="translate(123.906 40.833)" fill="#bbdadb"/>
            </g>
            <g id="Group_14-9" data-name="Group 14" transform="translate(15.488 176.003)">
              <ellipse id="Ellipse_4-18" data-name="Ellipse 4" cx="3.52" cy="4.224" rx="3.52" ry="4.224" transform="translate(174.595 19.712)" fill="#bbdadb"/>
              <ellipse id="Ellipse_5-18" data-name="Ellipse 5" cx="2.816" cy="3.52" rx="2.816" ry="3.52" transform="translate(0 0)" fill="#e2e2e2"/>
              <circle id="Ellipse_7-18" data-name="Ellipse 7" cx="2.816" cy="2.816" r="2.816" transform="translate(0 60.545)" fill="#e2e2e2"/>
              <rect id="Rectangle_17-18" data-name="Rectangle 17" width="66.177" height="12.672" rx="3" transform="translate(12.672 0)" fill="#e2e2e2"/>
              <rect id="Rectangle_23-18" data-name="Rectangle 23" width="66.177" height="11.264" rx="3" transform="translate(12.672 60.545)" fill="#e2e2e2"/>
              <rect id="Rectangle_19-18" data-name="Rectangle 19" width="66.177" height="12.672" rx="3" transform="translate(101.378 19.712)" fill="#bbdadb"/>
              <rect id="Rectangle_22-18" data-name="Rectangle 22" width="43.649" height="12.672" rx="3" transform="translate(123.906 39.425)" fill="#bbdadb"/>
            </g>
            <rect id="Rectangle_18-9" data-name="Rectangle 18" width="161.923" height="16.896" rx="3" transform="translate(15.488 270.341)" fill="#e2e2e2"/>
            <path id="Polygon_1-9" data-name="Polygon 1" d="M3.33,1.789a1,1,0,0,1,1.789,0L7.725,7A1,1,0,0,1,6.83,8.448H1.618A1,1,0,0,1,.724,7Z" transform="translate(197.124 274.565) rotate(90)" fill="#e2e2e2"/>
          </g>
          <g id="Group_20" data-name="Group 20" transform="matrix(0.966, 0.259, -0.259, 0.966, 666.016, -126.34)" opacity="0.35">
            <rect id="Rectangle_16-10" data-name="Rectangle 16" width="211.204" height="308.358" rx="16" transform="translate(0 0)" fill="#f8f8f8"/>
            <circle id="Ellipse_6-10" data-name="Ellipse 6" cx="7.04" cy="7.04" r="7.04" transform="translate(14.08 21.12)" fill="#c4c4c4"/>
            <rect id="Rectangle_20-10" data-name="Rectangle 20" width="49.281" height="4.224" rx="2" transform="translate(35.201 22.528)" fill="#c4c4c4"/>
            <rect id="Rectangle_21-10" data-name="Rectangle 21" width="19.712" height="2.816" rx="1.408" transform="translate(35.201 29.569)" fill="#e2e2e2"/>
            <g id="Group_13-10" data-name="Group 13" transform="translate(14.08 53.505)">
              <circle id="Ellipse_4-19" data-name="Ellipse 4" cx="2.816" cy="2.816" r="2.816" transform="translate(176.003 19.713)" fill="#bbdadb"/>
              <ellipse id="Ellipse_8-10" data-name="Ellipse 8" cx="2.816" cy="3.52" rx="2.816" ry="3.52" transform="translate(176.003 98.562)" fill="#bbdadb"/>
              <circle id="Ellipse_5-19" data-name="Ellipse 5" cx="3.52" cy="3.52" r="3.52" transform="translate(0 0)" fill="#e2e2e2"/>
              <ellipse id="Ellipse_7-19" data-name="Ellipse 7" cx="3.52" cy="4.224" rx="3.52" ry="4.224" transform="translate(0 57.729)" fill="#e2e2e2"/>
              <rect id="Rectangle_17-19" data-name="Rectangle 17" width="66.177" height="11.264" rx="3" transform="translate(14.08 0)" fill="#e2e2e2"/>
              <rect id="Rectangle_23-19" data-name="Rectangle 23" width="66.177" height="14.08" rx="3" transform="translate(14.08 57.729)" fill="#e2e2e2"/>
              <rect id="Rectangle_24-10" data-name="Rectangle 24" width="45.057" height="11.264" rx="3" transform="translate(14.08 80.258)" fill="#e2e2e2"/>
              <rect id="Rectangle_19-19" data-name="Rectangle 19" width="66.177" height="12.672" rx="3" transform="translate(102.786 19.713)" fill="#bbdadb"/>
              <rect id="Rectangle_25-10" data-name="Rectangle 25" width="66.177" height="12.672" rx="3" transform="translate(102.786 98.562)" fill="#bbdadb"/>
              <rect id="Rectangle_22-19" data-name="Rectangle 22" width="43.649" height="11.264" rx="3" transform="translate(125.314 39.425)" fill="#bbdadb"/>
            </g>
            <g id="Group_14-10" data-name="Group 14" transform="translate(14.08 176.003)">
              <circle id="Ellipse_4-20" data-name="Ellipse 4" cx="2.816" cy="2.816" r="2.816" transform="translate(176.003 22.528)" fill="#bbdadb"/>
              <ellipse id="Ellipse_5-20" data-name="Ellipse 5" cx="3.52" cy="4.224" rx="3.52" ry="4.224" transform="translate(0 0)" fill="#e2e2e2"/>
              <ellipse id="Ellipse_7-20" data-name="Ellipse 7" cx="3.52" cy="4.224" rx="3.52" ry="4.224" transform="translate(0 60.545)" fill="#e2e2e2"/>
              <rect id="Rectangle_17-20" data-name="Rectangle 17" width="66.177" height="12.672" rx="3" transform="translate(14.08 0)" fill="#e2e2e2"/>
              <rect id="Rectangle_23-20" data-name="Rectangle 23" width="66.177" height="12.672" rx="3" transform="translate(14.08 60.545)" fill="#e2e2e2"/>
              <rect id="Rectangle_19-20" data-name="Rectangle 19" width="66.177" height="12.672" rx="3" transform="translate(102.786 22.528)" fill="#bbdadb"/>
              <rect id="Rectangle_22-20" data-name="Rectangle 22" width="43.649" height="12.672" rx="3" transform="translate(125.314 40.833)" fill="#bbdadb"/>
            </g>
            <rect id="Rectangle_18-10" data-name="Rectangle 18" width="163.331" height="16.896" rx="3" transform="translate(14.08 270.341)" fill="#e2e2e2"/>
            <path id="Polygon_1-10" data-name="Polygon 1" d="M2.6,2.215a1,1,0,0,1,1.846,0l2.02,4.848A1,1,0,0,1,5.54,8.448H1.5A1,1,0,0,1,.577,7.064Z" transform="translate(195.716 275.973) rotate(90)" fill="#e2e2e2"/>
          </g>
          <g id="Group_27" data-name="Group 27" transform="matrix(0.966, 0.259, -0.259, 0.966, 476.88, 579.526)" opacity="0.35">
            <rect id="Rectangle_16-11" data-name="Rectangle 16" width="211.204" height="306.95" rx="16" transform="translate(0 0)" fill="#f8f8f8"/>
            <circle id="Ellipse_6-11" data-name="Ellipse 6" cx="7.04" cy="7.04" r="7.04" transform="translate(14.08 19.712)" fill="#c4c4c4"/>
            <rect id="Rectangle_20-11" data-name="Rectangle 20" width="49.281" height="5.632" rx="2" transform="translate(35.201 21.12)" fill="#c4c4c4"/>
            <rect id="Rectangle_21-11" data-name="Rectangle 21" width="19.712" height="2.816" rx="1.408" transform="translate(35.201 29.569)" fill="#e2e2e2"/>
            <g id="Group_13-11" data-name="Group 13" transform="translate(14.08 52.097)">
              <circle id="Ellipse_4-21" data-name="Ellipse 4" cx="2.816" cy="2.816" r="2.816" transform="translate(176.003 21.12)" fill="#bbdadb"/>
              <ellipse id="Ellipse_8-11" data-name="Ellipse 8" cx="2.816" cy="4.224" rx="2.816" ry="4.224" transform="translate(176.003 98.562)" fill="#bbdadb"/>
              <ellipse id="Ellipse_5-21" data-name="Ellipse 5" cx="3.52" cy="4.224" rx="3.52" ry="4.224" transform="translate(0 0)" fill="#e2e2e2"/>
              <circle id="Ellipse_7-21" data-name="Ellipse 7" cx="3.52" cy="3.52" r="3.52" transform="translate(0 59.137)" fill="#e2e2e2"/>
              <rect id="Rectangle_17-21" data-name="Rectangle 17" width="66.177" height="12.672" rx="3" transform="translate(14.08 0)" fill="#e2e2e2"/>
              <rect id="Rectangle_23-21" data-name="Rectangle 23" width="66.177" height="14.08" rx="3" transform="translate(14.08 59.137)" fill="#e2e2e2"/>
              <rect id="Rectangle_24-11" data-name="Rectangle 24" width="45.057" height="12.672" rx="3" transform="translate(14.08 80.258)" fill="#e2e2e2"/>
              <rect id="Rectangle_19-21" data-name="Rectangle 19" width="66.177" height="11.264" rx="3" transform="translate(102.786 21.12)" fill="#bbdadb"/>
              <rect id="Rectangle_25-11" data-name="Rectangle 25" width="66.177" height="12.672" rx="3" transform="translate(102.786 98.562)" fill="#bbdadb"/>
              <rect id="Rectangle_22-21" data-name="Rectangle 22" width="43.649" height="11.264" rx="3" transform="translate(125.314 40.833)" fill="#bbdadb"/>
            </g>
            <g id="Group_14-11" data-name="Group 14" transform="translate(14.08 176.004)">
              <ellipse id="Ellipse_4-22" data-name="Ellipse 4" cx="2.816" cy="3.52" rx="2.816" ry="3.52" transform="translate(176.003 21.12)" fill="#bbdadb"/>
              <ellipse id="Ellipse_5-22" data-name="Ellipse 5" cx="3.52" cy="4.224" rx="3.52" ry="4.224" transform="translate(0 0)" fill="#e2e2e2"/>
              <circle id="Ellipse_7-22" data-name="Ellipse 7" cx="3.52" cy="3.52" r="3.52" transform="translate(0 60.545)" fill="#e2e2e2"/>
              <rect id="Rectangle_17-22" data-name="Rectangle 17" width="66.177" height="12.672" rx="3" transform="translate(14.08 0)" fill="#e2e2e2"/>
              <rect id="Rectangle_23-22" data-name="Rectangle 23" width="66.177" height="12.672" rx="3" transform="translate(14.08 60.545)" fill="#e2e2e2"/>
              <rect id="Rectangle_19-22" data-name="Rectangle 19" width="66.177" height="12.672" rx="3" transform="translate(102.786 21.12)" fill="#bbdadb"/>
              <rect id="Rectangle_22-22" data-name="Rectangle 22" width="43.649" height="11.264" rx="3" transform="translate(125.314 40.833)" fill="#bbdadb"/>
            </g>
            <rect id="Rectangle_18-11" data-name="Rectangle 18" width="163.331" height="16.896" rx="3" transform="translate(14.08 270.341)" fill="#e2e2e2"/>
            <path id="Polygon_1-11" data-name="Polygon 1" d="M3.33,1.789a1,1,0,0,1,1.789,0L7.725,7A1,1,0,0,1,6.83,8.448H1.618A1,1,0,0,1,.724,7Z" transform="translate(195.716 274.565) rotate(90)" fill="#e2e2e2"/>
          </g>
        </g>
      </svg>
  )
}

export default Background
