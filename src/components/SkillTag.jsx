import React from 'react'

const SkillTag = ({ icon: Icon, label }) => {
  return (
    <div className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-custom-foreground text-lg font-medium border border-custom-border">
      <Icon className="w-6 h-6 text-custom-primary" />
      <span>{label}</span>
    </div>
  )
}

export default SkillTag