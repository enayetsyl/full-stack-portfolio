'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Sidebar from '@/components/dashboard/Sidebar';
import DSkill from '@/components/dashboard/DSkill';
import DExperience from '@/components/dashboard/DExperience';
import DProjects from '@/components/dashboard/DProjects';
import DBlogs from '@/components/dashboard/DBlogs';

const Dashboard = () => {
  const router = useRouter();
  const [activeComponent, setActiveComponent] = useState('Skill');

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      router.push('/login');
    }
  }, [router]);

  const renderComponent = () => {
    switch (activeComponent) {
      case 'Skill':
        return <DSkill />;
      case 'Experience':
        return <DExperience />;
      case 'Projects':
        return <DProjects />;
      case 'Blogs':
        return <DBlogs />;
      default:
        return <DSkill />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar setActiveComponent={setActiveComponent} />
      <main className="flex-1 p-6">{renderComponent()}</main>
    </div>
  );
};

export default Dashboard;
