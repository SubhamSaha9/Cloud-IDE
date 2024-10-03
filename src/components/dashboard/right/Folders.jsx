import React from "react";
import { BiEditAlt } from "react-icons/bi";
import { FaPlus } from "react-icons/fa";
import { FcOpenedFolder } from "react-icons/fc";
import { ImBin } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import Files from "./Files";
import { openModal } from "../../../slice/modalSlice";
import { deleteFolder } from "../../../slice/playgroundSlice";

const Folders = () => {
  const { folders } = useSelector((state) => state.codeplay);
  const dispatch = useDispatch();
  return (
    <div>
      {folders ? (
        folders.map((folder, i) => (
          <div className="folder" key={i}>
            <div className="flex items-center justify-between text-2 py-[8px] border-b-[1px] border-gray-400 my-4">
              <div className="flex items-center gap-2 text-[20px]">
                <FcOpenedFolder />
                {folder.title}
              </div>
              <div className="flex items-center gap-[20px]">
                <ImBin
                  onClick={() =>
                    dispatch(deleteFolder({ folderId: folder.id }))
                  }
                  className="cursor-pointer"
                />
                <BiEditAlt
                  onClick={() =>
                    dispatch(
                      openModal({
                        show: true,
                        modalType: 2,
                        folderId: folder.id,
                      })
                    )
                  }
                  className="cursor-pointer"
                />
                <div
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={() =>
                    dispatch(
                      openModal({
                        show: true,
                        modalType: 4,
                        folderId: folder.id,
                      })
                    )
                  }
                >
                  <FaPlus />
                  New Codeplay
                </div>
              </div>
            </div>
            <Files files={folder.files} folderId={folder.id} />
          </div>
        ))
      ) : (
        <div>Nothing to show</div>
      )}
    </div>
  );
};

export default Folders;
