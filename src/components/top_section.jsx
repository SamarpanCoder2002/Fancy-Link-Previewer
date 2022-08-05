import AppLogo from "../images/logo.png";

const TopSection = () => {
  return (
    <div className="p-2 flex justify-center pt-3 text-white">
      <div
        className="text-xl px-2 pt-1 font-semibold tracking-wider cursor-pointer"
        onClick={() => {}}
      >
        <div className="flex w-full">
          <div>
            <img src={AppLogo} alt="app logo" width={35} />
          </div>
          <div className="mt-1 ml-3">Fancy Link Previewer</div>
        </div>
      </div>
    </div>
  );
};

export default TopSection;
