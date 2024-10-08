/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
    	keyframes:{
    		'spin-slow':{
    			'0%':{transform:'rotate(0deg)'},
    			'100%':{transform:'rotate(360deg)'}
    		},
    		'rotate-img':{
    			'0%':{transform:'rotate(0deg)'},
    			'25%':{transform:'rotate(-90deg)'},
    			'50%':{transform:'rotate(-180deg)'},
    			'75%':{transform:'rotate(-270deg)'},
    			'100%':{transform:'rotate(-360deg)'}
    		}
    	},
    	animation:{
    			'spin-slow':'spin-slow 13s linear infinite',
    			'rotate-img':'rotate-img 13s linear infinite'
    	}
    },
  },
  plugins: [],
}

