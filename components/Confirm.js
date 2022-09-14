import React from 'react';

const style = {
    wrapper: `flex-1 h-full flex flex-col justify-between`,
    rideSelectorContainer: `h-full flex flex-col overflow-scroll`,
    confirmButtonContainer: ` border-t-2 cursor-pointer z-10`,
    confirmButton: `bg-black text-white m-4 py-4 text-center text-xl`,
}

const Confirm = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.rideSelectorContainer}>
                {/*{pickupCoordinates && dropoffCoordinates && <RideSelector />}*/}
            </div>
            <div className={style.confirmButtonContainer}>
                <div className={style.confirmButtonContainer}>
                    <div
                        className={style.confirmButton}
                        // onClick={() => storeTripDetails(pickup, dropoff)}
                    >
                        Confirm
                        {/*{selectedRide.service || 'UberX'}*/}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Confirm;
