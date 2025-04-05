import ImageGallery from '@/ui/Gallery'
export default function Home() {
  return (
    <div className="w-full mt-[10rem]">
      <div className="max-w-[1280px] mx-auto px-6 space-y-[3rem]">
        <div>
          <h2>gallery</h2>
          <p className="!text-[1.6rem] max-w-[70ch]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Exercitationem aliquam sapiente quis! Sapiente reprehenderit
            assumenda delectus aliquam ipsam inventore
          </p>
        </div>
        <ImageGallery />
      </div>
    </div>
  )
}