"use client"

import * as React from "react"
import { createContext, useContext } from "react"
import { cn } from "@/registry/default/lib/utils"

// Types
type StepperContextValue = {
  activeStep: number
  setActiveStep: (step: number) => void
  orientation: "horizontal" | "vertical"
  disablePrevious: boolean
  disableNext: boolean
}

type StepItemContextValue = {
  step: number
  state: StepState
  isDisabled: boolean
}

type StepState = "active" | "completed" | "inactive" | "loading"

// Contexts
const StepperContext = createContext<StepperContextValue | undefined>(undefined)
const StepItemContext = createContext<StepItemContextValue | undefined>(undefined)

const useStepper = () => {
  const context = useContext(StepperContext)
  if (!context) {
    throw new Error("useStepper must be used within a Stepper")
  }
  return context
}

const useStepItem = () => {
  const context = useContext(StepItemContext)
  if (!context) {
    throw new Error("useStepItem must be used within a StepperItem")
  }
  return context
}

// Components
interface StepperProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultValue?: number
  value?: number
  onValueChange?: (value: number) => void
  orientation?: "horizontal" | "vertical"
  disablePrevious?: boolean
  disableNext?: boolean
}

const Stepper = React.forwardRef<HTMLDivElement, StepperProps>(
  ({ 
    defaultValue = 0,
    value,
    onValueChange,
    orientation = "horizontal",
    disablePrevious = false,
    disableNext = false,
    className,
    ...props
  }, ref) => {
    const [activeStep, setInternalStep] = React.useState(defaultValue)
    
    const setActiveStep = React.useCallback((step: number) => {
      if (value === undefined) {
        setInternalStep(step)
      }
      onValueChange?.(step)
    }, [value, onValueChange])

    const currentStep = value ?? activeStep

    return (
      <StepperContext.Provider value={{
        activeStep: currentStep,
        setActiveStep,
        orientation,
        disablePrevious,
        disableNext
      }}>
        <div 
          ref={ref}
          className={cn(
            "group/stepper flex data-[orientation=horizontal]:flex-row data-[orientation=horizontal]:w-full data-[orientation=vertical]:flex-col",
            className
          )}
          data-orientation={orientation}
          {...props}
        />
      </StepperContext.Provider>
    )
  }
)
Stepper.displayName = "Stepper"

// StepperItem
interface StepperItemProps extends React.HTMLAttributes<HTMLDivElement> {
  step: number
  completed?: boolean
  disabled?: boolean
  loading?: boolean
}

const StepperItem = React.forwardRef<HTMLDivElement, StepperItemProps>(
  ({ step, completed = false, disabled = false, loading = false, className, children, ...props }, ref) => {
    const { activeStep, disablePrevious, disableNext } = useStepper()
    
    const state: StepState = completed || step < activeStep
      ? "completed"
      : activeStep === step 
        ? "active" 
        : "inactive"

    // Calculate if this step should be disabled based on navigation rules
    const isDisabled = disabled || 
      (step < activeStep && disablePrevious) || 
      (step > activeStep && disableNext)

    return (
      <StepItemContext.Provider value={{ step, state, isDisabled }}>
        <div
          ref={ref}
          className={cn(
            "group/step flex items-center group-data-[orientation=horizontal]/stepper:flex-row group-data-[orientation=vertical]/stepper:flex-col",
            isDisabled && "opacity-50 pointer-events-none",
            className
          )}
          data-state={state}
          {...(isDisabled ? { "data-disabled": true } : {})}
          {...(loading ? { "data-loading": true } : {})}
          {...props}
        >
          {children}
        </div>
      </StepItemContext.Provider>
    )
  }
)
StepperItem.displayName = "StepperItem"

// StepperTrigger
interface StepperTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
}

const StepperTrigger = React.forwardRef<HTMLButtonElement, StepperTriggerProps>(
  ({ asChild = false, className, children, ...props }, ref) => {
    const { setActiveStep } = useStepper()
    const { step, isDisabled } = useStepItem()

    if (asChild) {
      return (
        <div className={className}>
          {children}
        </div>
      )
    }

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center gap-3",
          className
        )}
        onClick={() => setActiveStep(step)}
        disabled={isDisabled}
        {...props}
      >
        {children}
      </button>
    )
  }
)
StepperTrigger.displayName = "StepperTrigger"

// StepperIndicator
const StepperIndicator = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { state } = useStepItem()
  
  return (
    <div
      ref={ref}
      className={cn(
        "shrink-0 size-8 rounded-full flex items-center justify-center transition-colors bg-muted text-muted-foreground data-[state=completed]:bg-primary data-[state=completed]:text-primary-foreground data-[state=active]:bg-primary data-[state=active]:text-primary-foreground",
        className
      )}
      data-state={state}
      {...props}
    />
  )
})
StepperIndicator.displayName = "StepperIndicator"

// StepperTitle
const StepperTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-sm font-medium",
      className
    )}
    {...props}
  />
))
StepperTitle.displayName = "StepperTitle"

// StepperDescription
const StepperDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(
      "text-sm text-muted-foreground",
      className
    )}
    {...props}
  />
))
StepperDescription.displayName = "StepperDescription"

// StepperSeparator
const StepperSeparator = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {  
  return (
    <div
      ref={ref}
      className={cn(
        "h-0.5 w-full bg-muted flex-1 transition-colors",
        className
      )}
      {...props}
    />
  )
})
StepperSeparator.displayName = "StepperSeparator"

export {
  Stepper,
  StepperItem,
  StepperTrigger,
  StepperIndicator,
  StepperTitle,
  StepperDescription,
  StepperSeparator,
}