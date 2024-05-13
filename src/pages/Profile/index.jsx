import { CholaMain } from "@assets"
import { Dashboard } from "@components";
import { useState, useEffect } from 'react';
import api from '@api';

const Profile = () => {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    const getProfile = async () => {
      try {
        const res = await api.get("/user/silentFellow");
        if(res.status === 200) {
          setProfile(res.data);
        }
      } catch(error) {
        console.log(error);
      }
    }

    getProfile();
  }, [])

  return (
    // wrapper
    <div className="screen bg-light-bg flex flex-col gap-3 p-6">

      {/* nav */}
      <div className="w-full h-[15%] flex center gap-3">
        <div className="center gap-3 p-1 rounded-lg border-2 border-light-ascent">
          <img src={CholaMain} alt="missing" className="h-12 w-12 rounded-full" />

          <div className="flex flex-col justify-center gap-3">
            <span className="text-light-ascent font-extrabold">{profile?.name}</span>
            <span className="text-light-ascent font-extrabold">{profile?.email}</span>
          </div>
        </div>
      </div>

      {/* main */}
      <main className="full flex around">

        {/* stat */}
        <div className="w-1/3 h-full center p-3">
          <ul className="flex flex-col">
            <div className="flex gap-3">
              <li className="font-extrabold text-light-secondary">Name: </li>
              <li className="text-light-secondary">{profile?.name}</li>
            </div>
            <div className="flex gap-3">
              <li className="font-extrabold text-light-secondary">Email: </li>
              <li className="text-light-secondary">{profile?.email}</li>
            </div>
            <div className="flex gap-3">
              <li className="font-extrabold text-light-secondary">Games Played: </li>
              <li className="text-light-secondary">{profile?.games_played}</li>
            </div>
            <div className="flex gap-3">
              <li className="font-extrabold text-light-secondary">Wins: </li>
              <li className="text-light-secondary">{profile?.wins}</li>
            </div>
            <div className="flex gap-3">
              <li className="font-extrabold text-light-secondary">Losses: </li>
              <li className="text-light-secondary">{profile?.losses}</li>
            </div>
            <div className="flex gap-3">
              <li className="font-extrabold text-light-secondary">Draws: </li>
              <li className="text-light-secondary">{profile?.draws}</li>
            </div>
          </ul>
        </div>

        {/* graph */}
        <div className="w-[66%] h-full center">
          <Dashboard userData={profile} />
        </div>

      </main>

    </div>
  )
}

export default Profile
