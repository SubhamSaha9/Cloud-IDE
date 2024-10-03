import React from "react";
import { BiEditAlt } from "react-icons/bi";
import { ImBin } from "react-icons/im";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteCard } from "../../../slice/playgroundSlice";
import { openModal } from "../../../slice/modalSlice";

const Files = ({ files, folderId }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div>
      {files.length !== 0 ? (
        <div className="px-3 flex justify-between flex-wrap gap-[20px]">
          {files.map((file, index) => (
            <div
              className="flex items-center justify-between text-base p-2 w-[48%] rounded-lg transition ease-in-out delay-150 hover:scale-110 hover:shadow-[rgb(152, 152, 152) 0px 0px 8px 0px] duration-200"
              style={{
                boxShadow: "rgb(152, 152, 152) 0px 0px 4px 0px",
                cursor: "pointer",
              }}
              key={index}
              onClick={() =>
                navigate(`/folder/${folderId}/codespace/${file.id}`)
              }
            >
              <div className="flex items-center">
                <img src="logo.png" alt="logo" className="w-[70px] mr-2" />
                <div>
                  <div>{file.title}</div>
                  <div>Language: {file.language}</div>
                </div>
              </div>
              <div
                className="flex items-center gap-2 z-20"
                onClick={(e) => e.stopPropagation()}
              >
                <ImBin
                  onClick={() =>
                    dispatch(deleteCard({ folderId, cardId: file.id }))
                  }
                  className="cursor-pointer"
                />
                <BiEditAlt
                  onClick={() =>
                    dispatch(
                      openModal({
                        show: true,
                        modalType: 5,
                        folderId: folderId,
                        cardId: file.id,
                      })
                    )
                  }
                />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>no cards to show</div>
      )}
    </div>
  );
};

export default Files;
