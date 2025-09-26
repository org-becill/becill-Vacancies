import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Code, Rocket } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 shadow bg-white">
        <h1 className="text-2xl font-bold text-blue-600">MyApp</h1>
        <div className="space-x-4">
          <Button variant="ghost">Home</Button>
          <Button variant="ghost">About</Button>
          <Button variant="ghost">Contact</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section
        className="flex flex-col items-center text-center py-20 px-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold mb-4">Welcome to MyApp</h2>
        <p className="max-w-2xl mb-6 text-lg">
          Build modern and scalable web applications with ease. This is just a
          sample homepage made with React, Tailwind, and Framer Motion.
        </p>
        <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-200">
          Get Started
        </Button>
      </motion.section>

      {/* Features Section */}
      <section className="py-16 px-6 grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <Card className="shadow-lg">
          <CardContent className="flex flex-col items-center text-center p-6">
            <Star className="w-12 h-12 text-yellow-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Awesome UI</h3>
            <p>Beautiful and responsive UI with modern design principles.</p>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardContent className="flex flex-col items-center text-center p-6">
            <Code className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Easy to Code</h3>
            <p>Write clean and maintainable code using React and Tailwind.</p>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardContent className="flex flex-col items-center text-center p-6">
            <Rocket className="w-12 h-12 text-red-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Fast Performance</h3>
            <p>Optimized for speed, delivering smooth user experiences.</p>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="mt-auto py-6 bg-gray-800 text-gray-300 text-center">
        <p>© {new Date().getFullYear()} MyApp. All rights reserved.</p>
      </footer>
    </div>
  );
}
