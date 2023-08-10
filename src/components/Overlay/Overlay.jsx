import styles from './overlay.module.css'
import { CircularProgress } from "@mui/material";

const Overlay = (props) => {

    return (
        <div className={styles.overlay}>
        <CircularProgress
                                    size={64}
                                    sx={
                                        {
                                            color: 'blue',
                                            position: 'fixed',
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            bottom: 0,
                                            margin: 'auto',
                                            zIndex: 9999,
                                        }
                                    }
                                    />
        </div>
    )
}

export default Overlay;