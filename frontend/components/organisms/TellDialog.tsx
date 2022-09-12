import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { memo } from "react";
import styled from "styled-components";
import ClearIcon from "@mui/icons-material/Clear";
import IconButton from "@mui/material/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { tellDialogClose } from "../../features/tellDialogSlice";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  border: "none",
  borderRadius: "6px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

// eslint-disable-next-line react/display-name
export const TellDialog = memo(() => {
  const { isOpen } = useSelector((state: RootState) => state.tellDialog);
  const dispatch = useDispatch();

  return (
    <div>
      <Modal open={isOpen} onClose={() => dispatch(tellDialogClose())}>
        <Box sx={style}>
          <IconButton
            onClick={() => dispatch(tellDialogClose())}
            sx={{ position: "absolute", top: 0, right: 0 }}
          >
            <ClearIcon />
          </IconButton>
          <h3>TEL：080-1234-5678</h3>
          <Text className="cursor-pointer" href="tel:080-1234-5678">
            電話をかけてもよろしいですか？
          </Text>
        </Box>
      </Modal>
    </div>
  );
});

const Text = styled.a`
  &:hover {
    color: #74905d;
    border-bottom: 1px solid #74905d;
  }
`;
