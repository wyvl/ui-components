import React, { MouseEvent } from 'react'
import { buttonClass, IBaseButtonProps } from '../services/buttonHelper'
import { Anchor } from '../../Internals'
import { BaseButton } from '../BaseButton'

export interface ILinkButtonProps extends IBaseButtonProps {
  /** Weather the button is clickable or not */
  disabled?: boolean,
  /** Destination url */
  href?: string,
  /** Anchor props passthrough */
  anchorComponentProps?: {
    [i: string]: any
  }
}

export class LinkButton extends BaseButton<ILinkButtonProps> {
  public static defaultProps: Partial<ILinkButtonProps & IBaseButtonProps> = {
    disabled: false,
    type: 'neutral'
  }

  public render (): JSX.Element | null {
    const {
      className,
      size,
      type,
      disabled,
      href,
      anchorComponentProps,
      fullWidth
    } = this.props

    return (
      <Anchor
        href={href}
        anchorComponentProps={anchorComponentProps}
        onClick={this.handleClick}
      >
        <span className={buttonClass(type!, size, className, { disabled, 'full-width': fullWidth })}>
          {this.buttonContent}
        </span>
      </Anchor>
    )
  }

  private handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    const {
      disabled,
      onClick
    } = this.props

    if (onClick) {
      onClick(event)
    }

    if (disabled) {
      event.preventDefault()
    }
  }
}
