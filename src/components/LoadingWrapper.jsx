// src/components/LoadingWrapper.jsx
import React, { useState, useEffect } from "react";

const LoadingWrapper = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [imagesLoaded, setImagesLoaded] = useState(0);
    const [totalImages, setTotalImages] = useState(0);

    useEffect(() => {
        const imgElements = document.querySelectorAll("img");
        const total = imgElements.length;
        setTotalImages(total);

        if (total === 0) {
            // No images — stop loading immediately
            setLoading(false);
            return;
        }

        let loadedCount = 0;

        const onLoadHandler = () => {
            loadedCount++;
            setImagesLoaded(loadedCount);
            if (loadedCount >= total) {
                setLoading(false);
            }
        };

        const onErrorHandler = () => {
            // Even if an image fails, we still count it so loading can end
            loadedCount++;
            setImagesLoaded(loadedCount);
            if (loadedCount >= total) {
                setLoading(false);
            }
        };

        imgElements.forEach((img) => {
            if (img.complete) {
                onLoadHandler();
            } else {
                img.addEventListener("load", onLoadHandler);
                img.addEventListener("error", onErrorHandler);
            }
        });

        // Cleanup listeners
        return () => {
            imgElements.forEach((img) => {
                img.removeEventListener("load", onLoadHandler);
                img.removeEventListener("error", onErrorHandler);
            });
        };
    }, []);

    if (loading) {
        return (
            <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center">
                <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-gray-900"></div>
                <p className="mt-4 text-lg font-semibold text-gray-700">
                    Loading {imagesLoaded}/{totalImages}...
                </p>
            </div>
        );
    }

    return <>{children}</>;
};

export default LoadingWrapper;
