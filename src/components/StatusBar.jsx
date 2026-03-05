import React from 'react';

const StatusBar = ({ wordCount, charCount = 0, blockCount = 0, lastSaved, isSaving, profile = "Contract" }) => {
    return (
        <div className="status-bar">
            <div className="status-left">
                <span className="word-count">
                    {wordCount} words | {charCount} characters | {blockCount} blocks
                </span>
            </div>

            <div className="status-center">
                <span className={`profile-badge ${profile.toLowerCase()}`}>
                    {profile}
                </span>
            </div>

            <div className="status-right">
                {isSaving ? (
                    <span className="saving-indicator">Saving...</span>
                ) : (
                    <span className="last-saved">
                        Saved {lastSaved ? lastSaved.toLocaleTimeString() : 'never'}
                    </span>
                )}
            </div>
        </div>
    );
};

export default StatusBar;