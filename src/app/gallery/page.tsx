'use client'
import {Card, CardContent} from "@/components/ui/card";
import {useState} from "react";
import {Button} from "@/components/ui/button";

export default function Home() {
  const [sections, setSections] = useState(4)
  const handleAddSection = () => {
    setSections(sections + 1)
  }

  return (
      <div className="flex flex-col h-screen">
        <div className="flex-1 grid grid-cols-4 grid-rows-1 gap-4">
          {Array.from({ length: sections }, (_, i) => (
              <Card key={i} className="relative overflow-hidden rounded-lg group transition-all duration-300 ease-in-out">
                <img
                    src="/placeholder.svg"
                    alt={`Section ${i + 1}`}
                    width={1920}
                    height={1080}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 ease-in-out"
                />
                <div className="absolute inset-0 bg-gray-900/50 group-hover:bg-gray-900/30 transition-colors duration-300 ease-in-out" />
                <div className="relative z-10 h-full flex items-center justify-center">
                  <h2 className="text-4xl font-bold text-white">Section {i + 1}</h2>
                </div>
              </Card>
          ))}
        </div>
        <div className="bg-gray-100 py-4 dark:bg-gray-800">
          <div className="container mx-auto flex justify-center">
            <Button onClick={handleAddSection}>Add Section</Button>
          </div>
        </div>
      </div>
  );
}
