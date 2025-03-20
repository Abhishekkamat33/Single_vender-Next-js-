import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
  
    <footer className="bg-gray-800 text-white py-6 mt-2">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
            <h2 className="text-lg font-semibold">MyStore</h2>
            <div className="flex space-x-4 mt-2">
                <Link href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                    GitHub
                </Link>
                <Link href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                    LinkedIn
                </Link>
                <Link href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                    Twitter
                </Link>
            </div>
            <p className="mt-4 text-sm">&copy; {new Date().getFullYear()} MyStore. All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer