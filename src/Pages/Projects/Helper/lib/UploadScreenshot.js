const UploadScreenshot = ({ register }) => {
  return (
    <div
      className={`absolute top-0 justify-center items-center w-full h-full flex`}
    >
      <label
        htmlFor="dropzone-file"
        className="flex flex-col justify-center items-center w-full h-full bg-gray-50/50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer  dark:bg-gray-700/50  dark:border-gray-600 dark:hover:border-gray-500 "
      >
        <div className="flex flex-col justify-center items-center pt-5 pb-6">
          <svg
            aria-hidden="true"
            className="mb-3 w-10 h-10 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            ></path>
          </svg>
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="font-semibold">Click to upload</span> or drag and
            drop
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            SVG, PNG, JPG or GIF (MAX. 800x400px)
          </p>
        </div>
        <input
          id="dropzone-file"
          type="file"
          className="hidden"
          {...register("screenshot")}
        />
      </label>
    </div>
  );
};

export default UploadScreenshot;
