const DashedContainer = () => {
      return (
            <div className="absolute top-0 left-0 right-0 bottom-0 h-screen bg-[#e7e7e7] overflow-hidden -z-10">
                  <div className="grid grid-cols-dashed grid-rows-dashed">
                        <div className="border-dashed  border-r-2 border-b-2 border-neutral-500"></div>
                        <div className="border-dashed  border-r-2 border-b-2 border-neutral-500"></div>
                        <div className="border-dashed border-b-2 border-neutral-500"></div>
                        <div className="border-dashed  border-r-2 border-b-2 border-neutral-500"></div>
                        <div className="border-dashed  border-r-2 border-b-2 border-neutral-500"></div>
                        <div className="border-dashed  border-b-2 border-neutral-500"></div>
                        <div className="border-dashed  border-r-2 border-b-2 border-neutral-500"></div>
                        <div className="border-dashed  border-r-2 border-b-2 border-neutral-500"></div>
                        <div className="border-dashed  border-b-2 border-neutral-500"></div>
                        <div className="border-dashed  border-r-2 border-b-2 border-neutral-500"></div>
                        <div className="border-dashed  border-r-2 border-b-2 border-neutral-500"></div>
                        <div className="border-dashed  border-b-2 border-neutral-500"></div>
                  </div>
            </div>
      );
};

export default DashedContainer;
