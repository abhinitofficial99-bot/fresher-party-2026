"use client"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden relative">
      
      {/* 3D Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-pink-900 to-orange-900 opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-8">
        
        {/* 3D Title */}
        <motion.h1 
          initial={{ opacity: 0, y: -50, rotateX: 45 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1, type: "spring" }}
          className="text-6xl md:text-8xl font-black mb-4 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent"
          style={{ textShadow: '0 0 40px rgba(236, 72, 153, 0.8)' }}
        >
          FRESHER PARTY 2026
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-xl text-gray-300 mb-12"
        >
          The Biggest Night of the Year ✨
        </motion.p>

        {/* 3D QR Card with Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotateY: 180 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1, delay: 0.7, type: "spring" }}
          whileHover={{ scale: 1.05, rotateZ: 2 }}
          className="relative"
        >
          {/* Glow Effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-2xl opacity-75 animate-pulse" />
          
          <div className="relative bg-white p-8 rounded-3xl shadow-[0_30px_80px_rgba(236,72,153,0.5)] border-4 border-yellow-400">
            <img src="/qr.jpg" alt="Payment QR" className="w-80 h-80 object-contain"/>
          </div>
        </motion.div>

        {/* Price Tag 3D */}
        <motion.p 
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, type: "spring", bounce: 0.5 }}
          className="text-5xl font-extrabold mt-8 bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent"
          style={{ textShadow: '0 0 20px rgba(251, 191, 36, 0.6)' }}
        >
          Scan & Pay ₹1199
        </motion.p>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="text-lg text-yellow-300 mt-2"
        >
          Via UPI
        </motion.p>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="text-sm text-gray-400 text-center mt-4 max-w-md"
        >
          Note: Verified QR Pass will be sent to your Email ID after payment
        </motion.p>

        {/* Footer */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
          className="text-center text-gray-400 mt-16"
        >
          <p className="font-semibold text-lg">Organised by: Abhinit Gambhir & Piyush Singh</p>
          <p className="text-sm mt-2">For Payment Issues: 📞 7463860962 | 📞 +91 90608 65028</p>
        </motion.div>
      </div>

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-pink-500 rounded-full"
          initial={{ 
            x: Math.random() * window.innerWidth, 
            y: Math.random() * window.innerHeight,
            opacity: 0 
          }}
          animate={{ 
            y: [0, -100, 0],
            opacity: [0, 1, 0]
          }}
          transition={{ 
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 5
          }}
        />
      ))}

    </main>
  )
}
