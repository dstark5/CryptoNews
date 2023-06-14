module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  purge:{
  enabled: true,
    content: [
       './src/**/*.vue',
      './public/**/*.html',
    ]
  },
  theme: {
    extend: {
      colors: {
        fuchsia:{
           50:'#fdf4ff',
          100:'#fae8ff',
          200:'#f5d0fe',
          300:'#f0abfc',
          400:'#e879f9',
          500:'#d946ef',
          600:'#c026d3',
        },
        blueGray:{
          400:'#94a3b8',
          500:'#64748b',
          600:'#475569',
          700:'#1E293B',
          800:'#111827'
        },
        blue:{
          50:'#eff6ff',
          100:'#dbeafe',
          200:'#bfdbfe',
          300:'#93c5fd',
          400:'#60a5fa',
          500:'#3b82f6',
          600:'#2563eb'

        }
      }
     
    },
  },
  plugins: [],
}
