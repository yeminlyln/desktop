import { DiffSelection } from '../../models/diff'

export class GutterSelectionState {
  private readonly _start: number
  private readonly _initialSelection: boolean
  private readonly _snapshot: DiffSelection

  private _current: number

  public constructor(start: number, selected: boolean, snapshot: DiffSelection) {
    this._start = start
    this._current = start
    this._initialSelection = selected
    this._snapshot = snapshot
  }

  /**
   * Return the lower bounds of the selection range
   */
  public get lowerIndex(): number {
    if (this._start <= this._current) {
      return this._start
    }

    return this._current
  }

  /**
   * Return the upper bounds of the selection range
   */
  public get upperIndex(): number {
    if (this._start <= this._current) {
      return this._current
    }

    return this._start
  }

  /**
   * Return the index associated with the start of this gesture
   */
  public get initialIndex(): number {
      return this._start
  }

  /**
   * Return the index associated with the start of this gesture
   */
  public get initialSelectionState(): boolean {
    return this._initialSelection
  }

  /**
   * update the row the user is currently interacting with
   */
  public updateRangeSelection(current: number) {
    this._current = current
  }

  /**
   * calculate the number of rows to update as part of this diff selection
   */
  public get length(): number {
    if (this._start <= this._current) {
      return this._current - this._start + 1
    }

    return this._start - this._current + 1
  }
}
