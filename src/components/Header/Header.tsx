import {Box, Modal} from '@mui/material';
import NewButton from "./Buttons/NewButton";
import NewForm from "../Person/NewPersonForm";
import SettingsForm from "./Settings/SettingsForm";
import { useState } from "react";
import SettingsButton from "./Buttons/SettingsButton";
import PriceCard from "./PartyPrice/PriceCard";

const boxStyle = {
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
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Box sx={{ width: "100%", maxWidth: 500, p: 0.5, mr: 2 }}>
          <div
            style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}
          >
            <PriceCard />
            <Box sx={{ ml: 1, mr: 1 }}>
              <NewButton handleOpen={handleFormOpen} />
            </Box>
            <SettingsButton handleOpen={handleSettingOpen} />
          </div>
        </Box>
      </div>
      <Modal open={settingOpen} onClose={handleSettingClose} sx={{ justifyContent: "center" }}>
        <>
          <Box sx={boxStyle}>
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
          <Box sx={boxStyle}>
            <NewForm handleClose={handleFormClose} />
          </Box>
        </>
      </Modal>
    </>
  );
}

export default Header;