const imgbb = async (img) => {
  const formData = new FormData();
  formData.append("image", img);
  const imgbbURL = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMGBB}`;

  const res = await fetch(imgbbURL, {
    method: "POST",
    body: formData,
  });
  const {data:{url}} = await res.json();
  return url;
};
export default imgbb;
