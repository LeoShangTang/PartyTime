import NewButton from "./Buttons/NewButton";
import NewForm from "../Person/NewPersonForm";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import SettingsForm from "./Settings/SettingsForm";
import { useState } from "react";
import SettingsButton from "./Buttons/SettingsButton";
import PriceCard from "./PartyPrice/PriceCard";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: 5,
    p: 4,
  }

const Header = () => {

  const [formOpen, setFormOpen] = useState(false);
  const handleFormOpen = () => setFormOpen(true);
  const handleFormClose = () => setFormOpen(false);

  const [settingOpen, setSettingOpen] = useState(false);
  const handleSettingOpen = () => setSettingOpen(true);
  const handleSettingClose = () => setSettingOpen(false);
  
  return (
    <>
      <PriceCard />
      <NewButton handleOpen={handleFormOpen} />
      <SettingsButton handleOpen={handleSettingOpen} />
      <Modal
        open={settingOpen}
        onClose={handleSettingClose}
        sx={{ justifyContent: "center" }}
      >
        <>
          <Box sx={style}>
            <SettingsForm handleClose={handleSettingClose} />
          </Box>
        </>
      </Modal>
      <Modal
        open={formOpen}
        onClose={handleFormClose}
        sx={{ justifyContent: "center" }}
      >
        <>
          <Box sx={style}>
            <NewForm handleClose={handleFormClose} />
          </Box>
        </>
      </Modal>
    </>
  );
}

export default Header;