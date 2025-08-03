import React from 'react'

const SkillTag = ({ icon: Icon, label }) => {
  return (
    <div className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-custom-foreground text-lg font-medium border border-custom-border">
      {Icon && <Icon className="w-5 h-5 text-custom-primary" />}
      <span className='text-custom-primary'>{label}</span>
    </div>
  )
}

export default SkillTag