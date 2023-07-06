import React, { useState, useEffect, useCallback, useMemo } from "react";

// Mock request
const request = (userId: string): any =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: { name: `User ${userId}`, email: `user${userId}@example.com` },
      });
    }, 2000);
  });

export default function UseCallbackDemo(props: any) {
  const { userId } = props;
  const [userData, setUserData] = useState<any>(null);

  const fetchUserData = useCallback(async () => {
    const response = await request(userId);
    setUserData(response.data);
  }, [userId]);

  const displayName = useMemo(() => {
    return userData?.name.toUpperCase();
  }, [userData]);

  useEffect(() => {
    fetchUserData();
  }, [fetchUserData]);

  return (
    <div>
      <p>{displayName}</p>
      <button onClick={fetchUserData}>Refetch</button>
    </div>
  );
}
