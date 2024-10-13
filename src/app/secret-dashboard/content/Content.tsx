"use client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"


const Content = () => {

  const [text, setText] = useState("");
  const [mediaType, setMediaType] = useState<"video" | "image">("image");
  const [isPublic, setIsPublic] = useState<boolean>(false);
  const [mediaUrl, setMediaUrl] = useState<string>("");

  return (
    <>
     <p className="text-3xl my-5 font-bold text-center uppercase">Share Post</p>
     <form action="">
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl">New Post</CardTitle>
          <CardDescription>Share your exlusive content with your audience. Select only one video/image at a time.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-2">
            <Label htmlFor="content">Content</Label>
            <Textarea 
            id="content"
            placeholder="Share today's exlusive"
            required
            onChange={(e) => setText(e.target.value)}
            />
          </div>
          <Label>Media Type</Label>
          <RadioGroup
          defaultValue="image"
          value={mediaType}
          onValueChange={(value: "image" | "video") => setMediaType(value)}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="video" id="video" />
              <Label htmlFor="video">Video</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="image" id="image" />
              <Label htmlFor="image">Image</Label>
            </div>
          </RadioGroup>
        </CardContent>
      </Card>
     </form>
    </>
  )
}

export default Content