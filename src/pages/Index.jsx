import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const popularBreeds = [
  "Labrador Retriever",
  "German Shepherd",
  "Golden Retriever",
  "French Bulldog",
  "Bulldog",
];

const Index = () => {
  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">All About Dogs</h1>
        
        <div className="mb-8">
          <img
            src="/placeholder.svg"
            alt="A cute dog"
            className="mx-auto object-cover w-full h-[400px] rounded-lg shadow-lg"
          />
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Why Dogs are Amazing</CardTitle>
            <CardDescription>Discover the joy of having a canine companion</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              Dogs are often called "man's best friend," and for good reason. These loyal companions 
              offer unconditional love, provide emotional support, and can even help improve our 
              physical health. From their wagging tails to their playful nature, dogs bring joy and 
              laughter into our lives every day.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Popular Dog Breeds</CardTitle>
            <CardDescription>Some of the most beloved dog breeds worldwide</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6">
              {popularBreeds.map((breed, index) => (
                <li key={index} className="text-gray-700 mb-2">{breed}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
