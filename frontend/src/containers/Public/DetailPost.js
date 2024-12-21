import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPostsLimit } from '../../store/actions'; // Giả định action đã được định nghĩa
import Slider from '../../components/Slider';
import icons  from '../../ultils/icons';
const {HiLocationMarker, TbReportMoney , BsStopwatch, BsHash } = icons 
const DetailPost = () => {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.post);

  useEffect(() => {
    if (postId) {
      dispatch(getPostsLimit({ id: postId }));
    }
  }, [dispatch, postId]);

  return (
    <div className="w-full flex gap-4">
      <div className="w-[70%]">
        <Slider images={posts[0]?.images?.length && JSON.parse(posts[0]?.images?.image)} />
        <div className="flex flex-col gap-2 mt-4">
          <h2 className="text-xl font-bold text-red-600">{posts[0]?.title}</h2>
          <div className="flex items-center gap-2">
            <span className="text-blue-600 underline font-medium hover:text-orange-600 cursor-pointer">
              {posts[0]?.overviews?.area}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <HiLocationMarker color="#2563eb" />
            <span>{posts[0]?.address}</span>
          </div>
          <div className="flex items-center justify-between">
            <TbReportMoney />
            <span className="font-semibold text-lg text-green-600">
              {posts[0]?.attributes?.price}
            </span>
          </div>
        </div>
      </div>
      
      <div className="mt-8">
        <h3 className="font-semibold text-xl my-4">Đặc điểm tin đăng</h3>
        <table>
          <tbody>
            <tr>
              <td className="border px-2 py-1">Mã tin : 1 </td>
              <td className="border px-2 py-1">{posts[0]?.overviews?.code}</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">Khu vực : HCM </td>
              <td className="border px-2 py-1">{posts[0]?.overviews?.area}</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">Loại tin rao : Cho Thuê </td>
              <td className="border px-2 py-1">{posts[0]?.overviews?.type}</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">Đối tượng : NAM </td>
              <td className="border px-2 py-1">{posts[0]?.overviews?.target}</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">Gói tin : </td>
              <td className="border px-2 py-1">{posts[0]?.overviews?.bonus}</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">Ngày đăng : 20/12/2024 </td>
              <td className="border px-2 py-1">{posts[0]?.overviews?.created}</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">Ngày hết hạn 20/1/2025 </td>
              <td className="border px-2 py-1">{posts[0]?.overviews?.expired}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DetailPost;
