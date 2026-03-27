import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import yehiaPhoto from "@/assets/yehia.jpg";

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
    >
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-96 h-96 rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(191 100% 50% / 0.15) 0%, transparent 70%)",
            filter: "blur(60px)",
            top: "20%",
            left: "10%",
          }}
          animate={{
            x: [0, 50, -30, 0],
            y: [0, -40, 30, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute w-80 h-80 rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(252 90% 67% / 0.12) 0%, transparent 70%)",
            filter: "blur(50px)",
            bottom: "20%",
            right: "15%",
          }}
          animate={{
            x: [0, -40, 20, 0],
            y: [0, 30, -20, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Logo Animation */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-[120px] h-[120px] flex items-center justify-center"
        >
          {/* Outer rotating ring */}
          <motion.div
            className="absolute rounded-full border-2 border-transparent"
            style={{
              borderTopColor: "hsl(191 100% 50%)",
              borderRightColor: "hsl(191 100% 50% / 0.3)",
              width: "120px",
              height: "120px",
            }}
            animate={{ rotate: 360 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Inner pulsing circle */}
          <motion.div
            className="absolute w-24 h-24 rounded-full flex items-center justify-center overflow-hidden"
            style={{
              background: "linear-gradient(135deg, hsl(191 100% 50% / 0.2), hsl(252 90% 67% / 0.2))",
              boxShadow: "0 0 40px hsl(191 100% 50% / 0.3)",
              border: "2px solid hsl(191 100% 50% / 0.4)",
            }}
            animate={{
              scale: [1, 1.05, 1],
              boxShadow: [
                "0 0 40px hsl(191 100% 50% / 0.3)",
                "0 0 60px hsl(191 100% 50% / 0.5)",
                "0 0 40px hsl(191 100% 50% / 0.3)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {/* Yehia Photo */}
            <motion.img
              src={yehiaPhoto}
              alt="Yehia Samy"
              className="w-full h-full object-cover"
              animate={{
                opacity: [0.9, 1, 0.9],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </motion.div>

        {/* Loading text */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <h2 className="text-xl font-display font-semibold text-foreground mb-2">
            Loading Experience
          </h2>
          <p className="text-sm text-muted-foreground">Preparing your automation journey...</p>
        </motion.div>

        {/* Progress bar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="w-64"
        >
          <div className="h-1.5 bg-card rounded-full overflow-hidden border border-border/50">
            <motion.div
              className="h-full rounded-full"
              style={{
                background: "linear-gradient(90deg, hsl(191 100% 50%), hsl(252 90% 67%))",
                boxShadow: "0 0 10px hsl(191 100% 50% / 0.5)",
                width: `${progress}%`,
              }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <motion.p
            className="text-xs text-center mt-2 text-muted-foreground font-mono"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            {progress}%
          </motion.p>
        </motion.div>

        {/* Dots animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex gap-2"
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full bg-primary"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
